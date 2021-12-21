import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  root: './module.brand1',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './module.ui/src/ui'),
      '@': path.resolve(__dirname, './module.brand1/src'),
    },
  },
  server: {
    host: true,
    port: '3000'
  }
})
