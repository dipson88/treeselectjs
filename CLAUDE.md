# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

pnpm monorepo for `treeselectjs` — a vanilla TypeScript multi-select/tree-select component — plus thin React and Vue wrapper packages that re-export it. The wrappers have **no independent implementation**; they instantiate the core `Treeselect` class and sync props/refs to it. All actual behavior (rendering, keyboard nav, selection logic, search, positioning) lives in `packages/treeselectjs`.

```
packages/
  treeselectjs/          # core TS library — source of truth
  react-treeselectjs/    # React wrapper (depends on treeselectjs via workspace:*)
  vue-treeselectjs/      # Vue 3 wrapper (depends on treeselectjs via workspace:*)
```

## Commands

Run from repo root unless noted. Use `pnpm --filter <pkg> run <script>` to target one package (e.g. `pnpm --filter treeselectjs run jest:run`).

```bash
pnpm install               # install all workspace deps
pnpm build                 # build all packages (pnpm -r build)
pnpm dev                   # dev mode for all packages in parallel
pnpm check                 # biome check --write for all packages
pnpm changeset             # add a changeset before releasing
pnpm version-packages       # bump versions from changesets
pnpm release                # build + changeset publish
```

### Core package (`packages/treeselectjs`)

```bash
pnpm --filter treeselectjs run dev              # vite dev server, port 5173 (demo app)
pnpm --filter treeselectjs run typecheck        # tsc --noEmit across app/jest/cypress tsconfigs
pnpm --filter treeselectjs run jest:run         # unit tests (jsdom)
pnpm --filter treeselectjs run jest:watch
pnpm --filter treeselectjs run cypress:open     # interactive e2e (needs dev server running)
pnpm --filter treeselectjs run cypress:run      # headless e2e (needs dev server running)
pnpm --filter treeselectjs run test             # typecheck && jest:run && cypress:run
pnpm --filter treeselectjs run lint             # biome lint
pnpm --filter treeselectjs run lint:fix
```

Run a single Jest test file:
```bash
pnpm --filter treeselectjs exec jest __tests__/jest/tests/core-props/isSingleSelect.test.ts
```

Run a single Cypress spec (dev server must already be serving on 5173):
```bash
pnpm --filter treeselectjs exec cypress run --spec "__tests__/cypress/e2e/base/search.cy.ts"
```

React/Vue packages only have `dev`, `build`, `lint`, `check` (`build` = `tsc && vite build` for React, `vue-tsc && vite build` for Vue) — they have no test suites of their own; their behavior is exercised by the core package's Jest/Cypress suites.

## Architecture (core `treeselectjs`)

`src/treeselectjs.ts` exports the default `Treeselect` class, the single public entry point. It owns:
- All public props/methods from `ITreeselectParams`/`ITreeselect` (`src/treeselectTypes.ts`).
- Two internal sub-components it composes and wires together via callbacks (not events): `TreeselectInput` (`src/input/index.ts`) and `TreeselectList` (`src/list/index.ts`). `Treeselect` never touches their internals directly — it passes constructor callbacks (`inputCallback`, `arrowClickCallback`, `openCallback`, etc.) and reads their public `srcElement`/`value`/`selectedNodes`.
- DOM lifecycle: `mount()` tears down and rebuilds everything via `#initMount`/`#createTreeselect`; `destroy()` clears listeners and empties the container. Both wrappers (React/Vue) call `mount()` after mutating properties directly on the `Treeselect` instance rather than passing new full option objects — see `keysWithoutRender` lists in both wrappers for props that instead trigger a different path (value/options/id/iconElements changes require re-fetching data, not just a `mount()`).
- List positioning/direction (top vs bottom, `appendToBody` vs inline) is computed in `updateListPosition()` using `getBoundingClientRect`, driven by scroll/resize listeners registered only while the list is open.
- Selection semantics: three parallel value representations are tracked — `ungroupedValue` (leaf ids only, default), `groupedValue` (returns group ids when fully selected, `isGroupedValue` prop), and `allValue` (used when `isIndependentNodes` or `isSingleSelect`). `#updateInnerValues` picks which one becomes the public `value`.

`src/list/` internals:
- `listTypes.ts` defines `OptionsTreeMap` (a `Map<value, TreeItem>` — the flattened, mutable runtime representation of the nested `options` tree, built once by `getOptionsTreeMap` in `helpers/listOptionsHelper.ts`) and cached DOM references per node (`itemHtmlElement`, `checkboxHtmlElement`, `arrowItemHtmlElement`).
- `helpers/listCheckStateHelper.ts` — check/uncheck propagation logic (parent/child cascading, independent-nodes mode, disabled-branch handling).
- `helpers/listVisibilityStateHelper.ts` — search filtering, open/closed group state, and the `IntersectionObserver`-based "boosted rendering" mode (`isBoostedRendering`) for large trees.
- `helpers/domHelper.ts` — imperative DOM diffing/update (`updateDOM`) applied after any state change; the list does not use a virtual DOM, it mutates cached elements in place for performance.

`src/input/index.ts` (`TreeselectInput`) owns the input box: tags, search text box, clear/arrow icons, keyboard handling for backspace/space/enter, and emits `inputCallback`/`searchCallback`/open-close callbacks — it holds no knowledge of the option tree.

### Wrapper packages

- **react-treeselectjs** (`src/Treeselect.tsx`): a single functional component. Mounts a `TreeselectJS` instance once in a mount-only `useEffect`; subsequent renders diff `props` against `treeselect.current` property-by-property and call `.mount()` if anything (outside `keysWithoutRender`) changed. `value`/`options`/`id`/`iconElements` changes are handled by dedicated `useEffect`s that call `updateValue`/reassign `.options`/etc. Callback props use `on*` naming (`onInput`, `onOpen`, ...) mapped to the core's `*Callback` naming via `callbackKeysDictionary`.
- **vue-treeselectjs** (`src/Treeselect.vue`): Options/Composition API mix — declares props via `buildTreeselectProps()` mirroring `ITreeselectParams` (using `modelValue` for `v-model` instead of `value`), instantiates the core class in `onMounted`, and uses `watch()` on the whole `props` object plus dedicated watchers for `modelValue`/`options`/`id`/`iconElements` (same rationale as the React wrapper's `keysWithoutRender`).

When changing the core's public API (`ITreeselectParams`/`ITreeselectList`/etc. in `treeselectTypes.ts`), update both wrappers' prop lists/omitted-key lists and their READMEs — they are not auto-generated.

## Testing structure (core package)

- **Jest** (`__tests__/jest/`): unit tests against jsdom, organized by prop group (`core-props/`, `input-props/`, `list-props/`, `methods/`). Many use snapshot testing (`__snapshots__/`). `__tests__/jest/helpers/renderTreeselect.ts` is the standard way to mount a `Treeselect` instance in tests.
- **Cypress** (`__tests__/cypress/`): real-browser e2e specs organized by feature (`base/`, `disabled/`, `single/`, `slot/`, `large-data/`, `shadow-root-base/`, `experemental/` for `isBoostedRendering`). Specs load static HTML fixtures from `__tests__/cypress/pages/*.html` served by the Vite dev server (`dev:ci`, port 5173) — Cypress does not build the app itself, the dev server must be running (CI starts it in the background and polls before running specs).

## Conventions

- Biome (not ESLint/Prettier) for lint + format across all three packages; each has its own `biome.json`. Format: single quotes, no semicolons (ASI), 120-char lines, 2-space indent.
- Private class fields use `#` (native JS private fields), not TypeScript `private`.
- No comments explaining *what* code does — existing code favors short JSDoc only on public API members (in `treeselectTypes.ts` and wrapper prop types) to drive editor tooltips; internal helpers are largely comment-free.
- CSS uses custom properties (`--treeselectjs-*`) defined on `:root` for theming — see README "Customizing colors" section for the full variable list; keep new styleable values consistent with this pattern rather than hardcoding colors.
- Releases go through Changesets (`pnpm changeset` → `pnpm version-packages` → `pnpm release`); see `.changeset/README.md` for the full release/beta-release runbook including npm 2FA/OTP publishing.
- CI (`.github/workflows/`) runs one workflow per package per concern (biome/build/jest/cypress), path-filtered so a package's workflows only run when its own files change.
