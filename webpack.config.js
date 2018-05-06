var path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/scripts/app.js'],
  output: {
    path: path.resolve(__dirname),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  watch: true
};