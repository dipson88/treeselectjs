import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      'treeselectjs-test-helpers': resolve(__dirname, '../treeselectjs/__tests__/testHelpers'),
    },
  },
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./__tests__/vitest/setup.ts'],
    css: true,
  },
})
