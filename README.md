# Treeselect JS monorepo

This repository is a monorepo containing the core `treeselectjs` library and framework wrappers.

A multi-select JS component with nested options.
- Typescript Core Library - https://www.npmjs.com/package/treeselectjs
- React wrapper - https://www.npmjs.com/package/react-treeselectjs
- Vue wrapper - https://www.npmjs.com/package/vue-treeselectjs
- Full key support (ArrowUp, ArrowDown, Space, ArrowLeft, ArrowRight, Enter)
- Screen sensitive direction
- Typescript support

![Example img](https://github.com/dipson88/treeselectjs/blob/main/assets/treeselectjs.png?raw=true)

### Support
You can buy me a coffee if you want to support my work. Thank you!

<a href="https://www.buymeacoffee.com/dipson88" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Packages

- **treeselectjs** — TS core library  
  Path: [packages/treeselectjs](https://github.com/dipson88/treeselectjs/tree/main/packages/treeselectjs)  
  NPM: [treeselectjs](https://www.npmjs.com/package/treeselectjs)

- **react-treeselectjs** — React wrapper  
  Path: [packages/react-treeselectjs](https://github.com/dipson88/treeselectjs/tree/main/packages/react-treeselectjs)  
  NPM: [react-treeselectjs](https://www.npmjs.com/package/react-treeselectjs)

- **vue-treeselectjs** — Vue wrapper  
  Path: [packages/vue-treeselectjs](https://github.com/dipson88/treeselectjs/tree/main/packages/vue-treeselectjs)  
  NPM: [vue-treeselectjs](https://www.npmjs.com/package/vue-treeselectjs)

## Development

### Requirements
- Node.js 20+
- pnpm (via Corepack: `corepack enable`)

### Install
```bash
git clone https://github.com/dipson88/treeselectjs.git
cd treeselectjs
pnpm install
```

### Scripts
| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages |
| `pnpm dev` | Run dev mode for all packages in parallel |
| `pnpm check` | Lint/check all packages |
| `pnpm changeset` | Add a changeset for a release |
| `pnpm version-packages` | Bump versions from changesets |
| `pnpm release` | Publish packages to npm |
| `pnpm release:beta` | Build and publish packages to npm with the `beta` tag (for pre-release versions; install with `npm install <package>@beta`) |

### License
MIT