import { resolve } from 'node:path'
import { rmSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
      entry: resolve(__dirname, 'src/Treeselect.vue'),
      name: 'vue-treeselectjs',
      fileName: 'vue-treeselectjs',
    },
    rollupOptions: {
      external: ['vue', 'treeselectjs'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names.includes('style.css')) {
            return 'vue-treeselectjs.css'
          }

          return assetInfo.names[0]
        },
        globals: {
          vue: 'Vue',
          treeselectjs: 'Treeselect',
          'vue-treeselectjs': 'VueTreeselect',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
    }),
    removeAppDeclarations(),
  ],
})
