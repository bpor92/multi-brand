import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  root: './',
  plugins: [
    vue(),
    {
      name: 'panel-html-fallback',
      configureServer(server) {
        server.middlewares.use('/panel', (req, res, next) => {
          req.url += '.html'
          next()
        })
      },
    },
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
        // index: path.resolve(__dirname, './module.brand1/index.html'),
        // panel: path.resolve(__dirname, './module.brand1/module.panel/panel.html'),
        index: new URL('./module.brand1/index.html', import.meta.url).pathname,
        panel: new URL('./module.brand1/module.panel/panel.html', import.meta.url).pathname,
       
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
      '/panel': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          console.log('1')
          // proxy will be an instance of 'http-proxy'
        }
      }
    }
  }
})
