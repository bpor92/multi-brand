import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  root: './',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './module.ui/src/ui'),
      '@': path.resolve(__dirname, './module.panel/src'),
    },
  },
  build: {
    // rollupOptions: {
    //   input: {
    //     index: path.resolve(__dirname, './module.panel/panel.html'),
    //   }
    // },
    outDir: './module.panel/dist'
  },
  server: {
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:3000/'
    //   }
    // },
    port: '8081'
  }
})
