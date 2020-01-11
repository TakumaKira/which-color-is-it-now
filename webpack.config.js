const path = require('path');

module.exports = {
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, 'public/assets'),
      filename: 'bundle.js'
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      publicPath: '/assets/',
      watchContentBase: true
   },
   devtool: 'source-map'
};