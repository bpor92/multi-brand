import { defineConfig } from 'vite'
import commonConfig from '../vite.common.config'
const path = require('path')

export default defineConfig({
  build: {
    assetsDir: '',
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'panel.html'),
      },
      output: {
        chunkFileNames: () => {
         return 'panel.[name].[hash].js'
      }}
    },
  },
  plugins: [...commonConfig.plugins],
  resolve: {
    alias: {
      ...commonConfig.resolve.alias,
      '@': path.resolve(__dirname, './src')
    }
  }
})
