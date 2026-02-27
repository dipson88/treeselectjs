import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/treeselectjs.ts'),
      name: 'treeselectjs',
      fileName: 'treeselectjs',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names.includes('style.css')) {
            return 'treeselectjs.css'
          }

          return assetInfo.names[0]
        },
        globals: {
          treeselectjs: 'Treeselect',
        },
      },
    },
  },
  server: {
    open: './app/index.html',
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
})
