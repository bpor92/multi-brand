import { defineConfig } from 'vite'
import { prepareConfig } from './vite.common.config'
const { resolve } = require('path')

export default defineConfig({
  ...prepareConfig({ 
    brand: 'brand1',
    port: 3000
  }),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'module.brand1/index.html'),
        nested: resolve(__dirname, 'module.brand1/about/index.html')
      }
    }
  }
})
