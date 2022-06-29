const path = require('path');

module.exports = {
  entry: './ElementAPI.js',
  output: {
    path: path.resolve(__dirname, '../www'),
    filename: 'ElementAPI.js',
  },

  // https://webpack.docschina.org/configuration/dev-server/
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: 8080,
  }
};
