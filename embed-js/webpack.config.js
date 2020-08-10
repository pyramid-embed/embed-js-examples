const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
      'getting-started':'./getting-started.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    /* filename: 'website.bundle.js' */
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: '*.html' },
      ]
    }),
  ],
};