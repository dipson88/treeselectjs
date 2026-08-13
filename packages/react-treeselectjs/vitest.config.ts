import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      'treeselectjs-test-helpers': resolve(__dirname, '../treeselectjs/__tests__/testHelpers'),
    },
  },
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./__tests__/vitest/setup.ts'],
    css: true,
  },
})
