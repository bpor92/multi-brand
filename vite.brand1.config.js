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
      '@': path.resolve(__dirname, './module.brand1/src'),
      '@panel': path.resolve(__dirname, './module.panel/src')
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, './module.brand1/index.html'),
        panel: path.resolve(__dirname, './module.panel/panel.html'),
      }
    },
    outDir: './module.brand1/dist'
  },
  // server: {
  //   fs: {
  //     strict: false,
  //     allow: ['..']
  //   }
  // }
})
