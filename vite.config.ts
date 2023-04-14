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
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          treeselectjs: 'TreeselectJS',
          'react-treeselectjs': 'Treeselect'
        }
      }
    }
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
})
