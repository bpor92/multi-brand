import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'

const path = require('path')

export default defineConfig({
  root: './',
  plugins: [
    vue(), 
    // ViteComponents({
    //   dirs: ['./module.brand1/src'],
    //   extensions: ['vue'],
    //   deep: true,
    // })
  ],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './module.ui/src/ui'),
      '@': path.resolve(__dirname, './module.brand1/src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, './module.brand1/index.html'),
        panel: path.resolve(__dirname, './module.panel/panel.html'),
      },
      output: {
        chunkFileNames: () => {
         return 'brand1.[name].[hash].js'
      }}
    }
  }
})
