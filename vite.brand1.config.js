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
      },
      output: {
        chunkFileNames: () => {
         return 'brand1.[name].[hash].js'
        },
      }
    },
    outDir: './dist'
  },
  server: {
    proxy: {
      '/panel':{
        target:'http://localhost:3003/',
        changeOrigin:true,
        rewrite:(path)=> path.replace(/^\/panel/,'')
      },
    }
  }
})
