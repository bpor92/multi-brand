import { defineConfig } from 'vite'
import commonConfig from '../vite.common.config'
import history from 'vite-plugin-history'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...commonConfig.plugins,
    history(
      { from: /\/panel/, to: '/panel/index.html' }
    )
  ],
  resolve: {
    alias: {
      ...commonConfig.resolve.alias,
      '@': path.resolve(__dirname, './src')
    }
  }
})
