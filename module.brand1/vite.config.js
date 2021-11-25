import { defineConfig } from 'vite'
import commonConfig from '../vite.common.config'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [...commonConfig.plugins],
  resolve: {
    alias: {
      ...commonConfig.resolve.alias,
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, './index.html'),
        panel: path.resolve(__dirname, '../module.panel/panel.html')
      }
    }
  }
})
