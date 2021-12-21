import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  base: '/panel/',
  root: './module.panel',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './module.ui/src/ui'),
      '@': path.resolve(__dirname, './module.panel/src'),
    },
  },
  server: {
    host: true,
    port: '3001'
  }
})
