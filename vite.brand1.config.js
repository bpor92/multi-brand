import { defineConfig } from 'vite'
import { prepareConfig } from './vite.common.config'

export default defineConfig({
  ...prepareConfig({ 
    brand: 'brand1',
    port: 3000
  })
})
