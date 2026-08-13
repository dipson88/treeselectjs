---
description: Iteratively run pnpm audit and apply fixes until all vulnerabilities are resolved (or no more automatic progress can be made)
---

Goal: eliminate all `pnpm audit` findings in this monorepo, iterating automatically instead of stopping after one fix attempt.

Run every command from the repo root. Do not skip hooks or use `--no-verify`. This is a chore task — proceed without asking for confirmation between iterations, but stop and summarize if you hit a case that needs a human call (see "When to stop" below).

## Step 0: clear stale overrides first

`pnpm-workspace.yaml` currently has `minimumReleaseAgeExclude` and `overrides` sections pinning specific package versions. These were added to work around vulnerabilities/policy at some point in the past and may no longer be needed if the underlying dependency trees have since moved on naturally. Before running the fix loop:

1. Note the current contents of both sections (so they can be restored if needed) — the diff will also be visible via `git diff pnpm-workspace.yaml`.
2. Remove the `minimumReleaseAgeExclude` and `overrides` keys entirely from `pnpm-workspace.yaml`.
3. Run `pnpm install`. If it fails outright (e.g. because a version excluded by `minimumReleaseAge` is now required and no longer excluded), restore just enough of `minimumReleaseAgeExclude` to let install succeed — don't restore `overrides` speculatively, only if install genuinely needs it.
4. Run `pnpm audit` to get a fresh baseline now that nothing is artificially pinned.

Then proceed into the normal loop below. If it turns out overrides are still needed for some packages, step 5 of the loop (`--fix override`) will re-add only the ones still required — so the end state should be minimal/no leftover overrides rather than the original full list.

## Loop

Repeat the following cycle, tracking the vulnerability count reported by `pnpm audit` each time:

1. **Baseline**: run `pnpm audit`. Note the number/severity of vulnerabilities. If it reports none, you're done — skip to "Wrap up".
2. **Update pass**: run `pnpm audit --fix update`. This rewrites `pnpm-lock.yaml` to bump vulnerable (transitive) packages to non-vulnerable versions within existing semver ranges.
3. **Reinstall**: run `pnpm install` so the lockfile changes are materialized into `node_modules`.
4. **Re-check**: run `pnpm audit` again.
   - If clean, go to "Wrap up".
   - If the count dropped, continue the loop from step 2 again (there can be more fixable-by-update vulnerabilities revealed after the first pass).
   - If the count is unchanged after the update pass, move to step 5.
5. **Override pass**: run `pnpm audit --fix override`. This forces non-vulnerable versions for packages that couldn't be resolved within their declared ranges (e.g. a transitive dep pinned by an outdated direct dependency) by writing an `overrides` block — check whether pnpm writes it to `pnpm-workspace.yaml` (where it lived before Step 0 removed it) or to a `pnpm.overrides` block in the root `package.json`, and inspect whichever one changed.
6. **Reinstall**: run `pnpm install` again.
7. **Re-check**: run `pnpm audit`.
   - If clean, go to "Wrap up".
   - If the count dropped, loop back to step 2 (an override may unlock further update-fixable issues).
   - If the count is unchanged compared to before step 5, stop looping — remaining vulnerabilities aren't auto-fixable (see "When to stop").

Cap the whole loop at roughly 5 full cycles. If it's still not converging by then, stop and report rather than looping indefinitely.

## When to stop and ask the user

- `pnpm audit --fix override` had to force a **major version bump** on a direct dependency (check the diff in `pnpm-workspace.yaml`/`package.json`/`pnpm-lock.yaml`) — flag this, since it can be a breaking change, before assuming it's safe.
- An override was added but `pnpm install` then fails (peer dependency conflicts, missing engine support, build errors) — do not force-remove the override to make install pass; report the conflict.
- `pnpm audit` still reports vulnerabilities with **no available fix** at all (no patched version exists upstream) — list them with `--ignore-unfixable` for visibility, but don't fabricate a fix; report them to the user.
- After a full cycle, `pnpm audit` output stops changing between iterations (no progress) — stop rather than looping forever.

## Wrap up

Once `pnpm audit` is clean (or you've stopped per the rules above):

- Run `pnpm build` first.
- Check whether the dependency/override changes moved any bundle sizes, using each package's own build output as the source of truth:
  1. From the `pnpm build` output, note the printed size + gzip size for each `dist/*.mjs`/`*.umd.js`/`*.css` file, per package (e.g. `dist/treeselectjs.mjs  46.21 kB │ gzip: 10.82 kB`).
  2. For each package (`packages/treeselectjs`, `packages/react-treeselectjs`, `packages/vue-treeselectjs`), open its `README.md` and find its size-listing section — the heading differs per package (`Build data:` in treeselectjs/react-treeselectjs, `Bundle sizes:` in vue-treeselectjs) — and compare each listed file's size/gzip numbers against the fresh build output.
  3. If a package's numbers are unchanged, note it as unchanged. If any differ, update that README's lines to the new build output values, and record the before/after for the summary.
- Run `pnpm --filter treeselectjs run typecheck` and `pnpm --filter treeselectjs run jest:run`.
- Run `pnpm --filter react-treeselectjs run test` and `pnpm --filter vue-treeselectjs run test` (Vitest suites covering the React/Vue wrapper packages).
- Run the Cypress e2e suite — it needs the demo dev server up on port 5173 first (`cypress:run` alone will fail with connection-refused otherwise):
  1. Check nothing is already listening on port 5173 before starting a new one.
  2. Start the dev server in the background: `pnpm --filter treeselectjs run dev:ci` (binds `127.0.0.1:5173`; use a background shell so it doesn't block).
  3. Poll until it's ready instead of a fixed sleep, e.g. loop on `curl -sf http://127.0.0.1:5173/__tests__/cypress/pages/cypress-base.html` (mirrors `.github/workflows/cypress.yml`) up to ~60s; if it never comes up, stop and report rather than running Cypress against a dead server.
  4. Run `pnpm --filter treeselectjs run cypress:run`.
  5. Stop the background dev server afterwards regardless of pass/fail, so it doesn't leak between runs or block a later port-5173 use.
  - If the dependency/override changes bumped `cypress` or `vite` themselves, pay extra attention to this step — that's exactly the kind of change that can silently break e2e without affecting jest/typecheck.
  - Similarly, if `vitest`, `@testing-library/*`, or the framework packages (`react`, `vue`) themselves were bumped, pay extra attention to the wrapper test results from the step above.
- Summarize what changed: which packages were bumped by the update pass, which overrides were added (and why), which package bundle sizes changed (if any, per the README check above), and any vulnerabilities or test failures left unresolved.
- Do not commit automatically — leave the changes staged/unstaged for the user to review, unless they explicitly ask you to commit.
