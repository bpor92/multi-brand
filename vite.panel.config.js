import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
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
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:3000/'
    //   }
    // },
    port: '8081'
  }
})
