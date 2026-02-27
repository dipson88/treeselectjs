import { resolve } from 'node:path'
import { rmSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

const distDir = resolve(__dirname, 'dist')
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

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/Treeselect.tsx'),
      name: 'react-treeselectjs',
      fileName: 'react-treeselectjs',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'treeselectjs'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'react-treeselectjs.css'
          }

          return assetInfo.name
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          treeselectjs: 'Treeselect',
          'react-treeselectjs': 'ReactTreeselect',
        },
      },
    },
  },
  plugins: [
    react({
      // Using the classic runtime to avoid JSX in the bundle. This needs to be tested over time.
      jsxRuntime: 'classic',
    }),
    dts(),
    removeAppDeclarations(),
  ],
})
