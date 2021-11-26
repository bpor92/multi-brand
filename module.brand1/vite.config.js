import { defineConfig } from 'vite'
import commonConfig from '../vite.common.config'

const path = require('path')

export default defineConfig({
  build: {
    assetsDir: ''
  },
  plugins: [
    ...commonConfig.plugins,
  ],
  resolve: {
    alias: {
      ...commonConfig.resolve.alias,
      '@': path.resolve(__dirname, './src')
    }
  }
})
