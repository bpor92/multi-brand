import vue from '@vitejs/plugin-vue'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

export default {
  plugins: [vue()],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './module.ui/src/ui')
    }
  }
}
