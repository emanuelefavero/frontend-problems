import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'
// import { resolve } from 'path'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',

      // Exclude Playwright tests
      '**/tests/**',
    ],
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: '@',
  //       replacement: resolve(__dirname, '.'),
  //     },
  //   ],
  // },
})
