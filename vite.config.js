import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/treeselectjs.ts'),
      name: 'treeselectjs',
      fileName: 'treeselectjs',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'treeselectjs.css'
          }

          return assetInfo.name
        },
        globals: {
          treeselectjs: 'Treeselect'
        }
      }
    }
  },
  server: {
    open: './app/index.html'
  },
  plugins: [dts({
    insertTypesEntry: true,
    rollupTypes: true
  })]
})
