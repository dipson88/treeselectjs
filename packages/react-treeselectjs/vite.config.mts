import { resolve } from 'node:path'
import { renameSync, rmSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

const distDir = resolve(import.meta.dirname, 'dist')

const removeAppDeclarations = () => ({
  name: 'remove-app-declarations',
  closeBundle() {
    for (const name of ['App.d.ts', 'main.d.ts']) {
      try {
        rmSync(resolve(distDir, name), { force: true })
      } catch {
        /* ignore */
      }
    }
  },
})

const renameDtsFile = () => ({
  name: 'rename-dts-file',
  writeBundle() {
    try {
      renameSync(resolve(distDir, 'Treeselect.d.ts'), resolve(distDir, 'react-treeselectjs.d.ts'))
    } catch {
      /* ignore */
    }
  },
})

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/Treeselect.tsx'),
      name: 'ReactTreeselect',
      fileName: 'react-treeselectjs',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'treeselectjs'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names.includes('style.css')) {
            return 'react-treeselectjs.css'
          }

          return assetInfo.names[0]
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          treeselectjs: 'Treeselect',
        },
      },
    },
  },
  plugins: [
    react({
      // Using the classic runtime to avoid JSX in the bundle. This needs to be tested over time.
      jsxRuntime: 'classic',
    }),
    dts({
      // tsconfig.json's "include" also covers __tests__ (for typecheck), but the
      // declaration output should only ever reflect the published src/ entry point.
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),
    removeAppDeclarations(),
    renameDtsFile(),
  ],
})
