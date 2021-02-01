const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
    return {
      ...config,
    }
  },
}
