import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/Treeselect.tsx'),
      name: 'react-treeselectjs',
      fileName: 'react-treeselectjs'
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
          'react-treeselectjs': 'ReactTreeselect'
        }
      }
    }
  },
  plugins: [
    react({
      // Using the classic runtime to avoid JSX in the bundle. This needs to be tested over time.
      jsxRuntime: 'classic'
    }),
    dts()
  ]
})
