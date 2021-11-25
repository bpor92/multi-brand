import { defineConfig } from 'vite'
import commonConfig from '../vite.common.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [...commonConfig.plugins]
})
