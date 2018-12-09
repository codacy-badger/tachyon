const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'tachyon.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /test\.js$/],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  mode: 'production'
}
