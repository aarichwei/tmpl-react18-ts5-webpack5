const { Configuration } = require('webpack');
const baseConfig = require('./webpack.common.js');

/**
 * @type {Configuration}
 */
const config = {
  ...baseConfig,
  mode: 'development',
  devServer: {
    static: {
      publicPath: './dist',
    },
    port: 8633,
  },
};

module.exports = config;
