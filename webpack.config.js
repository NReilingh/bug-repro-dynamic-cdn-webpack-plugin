const path = require('path');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');

module.exports = {
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'dist')
  }
}