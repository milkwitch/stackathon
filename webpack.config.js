const path = require('path')
module.exports = {
  entry: path.join(__dirname, '/app/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist')
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
