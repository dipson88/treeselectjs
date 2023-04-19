import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/Treeselect.vue'),
      name: 'vue-treeselectjs',
      fileName: 'vue-treeselectjs'
    },
    rollupOptions: {
      external: ['vue', 'treeselectjs'],
      output: {
        globals: {
          vue: 'Vue',
          treeselectjs: 'TreeselectJS',
          'vue-treeselectjs': 'Treeselect'
        }
      }
    }
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    })
  ]
})
