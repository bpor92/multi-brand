import { defineConfig } from 'vite'
import { prepareConfig } from './vite.common.config'

export default defineConfig({
  ...prepareConfig({ 
    brand: 'panel',
    port: 3001
  }),
  base: '/panel/'
})
