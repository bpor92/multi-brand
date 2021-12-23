const { createVuePlugin } = require('vite-plugin-vue2');

const path = require('path')

export const prepareConfig = ({brand, port}) =>  ({
  root: `./module.${brand}`,
  plugins: [
    createVuePlugin()
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
