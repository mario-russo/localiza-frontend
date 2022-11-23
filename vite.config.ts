
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [vue({
    template: { transformAssetUrls }
  }),
  quasar({
    sassVariables: 'src/quasar-variables.sass'
  })],
  test: {},
})
