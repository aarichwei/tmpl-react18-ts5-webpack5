const { Configuration } = require('webpack');
const baseConfig = require('./webpack.common.js');

/**
 * @type {Configuration}
 */
const config = {
  ...baseConfig,
  mode: 'production',
};

module.exports = config;
