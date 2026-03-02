# treeselectjs monorepo

This repository is a monorepo containing the core `treeselectjs` library and framework wrappers.

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

### License
MIT