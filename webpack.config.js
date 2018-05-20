const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.pug$/, use: 'pug-loader' },
      // {
      //     test: /\.(png|jpg|gif)$/,
      //     use: [
      //       {
      //         loader: 'file-loader',
      //         options: {}
      //       }
      //     ]
      //   }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Grayson Gilmore - Portfolio',
      hash: true,
      template: path.resolve(__dirname, './src/templates/index.pug')
    })
  ]
};
