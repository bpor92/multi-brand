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
    proxy: {
      // '/panel': {
      //   target: 'http://localhost:8081/panel',
      //   changeOrigin: true,
      //   autoRewrite: true,
      //   hostRewrite: true,
      //   // configure: (proxy, options) => {
      //   //   console.log(proxy)
      //   //   console.log(options)
      //   //   // proxy will be an instance of 'http-proxy'
      //   // }
      //   // rewrite: (path) => {
      //   //   // console.log(path)
      //   //   return path.replace(/^\/panel/, '')
      //   //   // return 'http://localhost:8081/panel'
      //   // }
      // },
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path, path.replace(/^\/api/, ''))
          return path.replace(/^\/api/, '')
        } 
      },
    }
  }
})
