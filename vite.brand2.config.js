import { defineConfig } from 'vite'
import { prepareConfig } from './vite.common.config'

export default defineConfig({
  ...prepareConfig({ 
    brand: 'brand2',
    port: 3000
  })
})
