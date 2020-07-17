const path = require('path')

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath: '/assets/' 
  },
  devtool: 'cheap-module-eval-source-map'
};