import vue from '@vitejs/plugin-vue'

const path = require('path')

export const prepareConfig = ({brand, port}) =>  ({
  root: `./module.${brand}`,
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './module.ui/src/ui'),
      '@': path.resolve(__dirname, `./module.${brand}/src`),
    },
  },
  server: {
    host: true,
    port
  }
})
