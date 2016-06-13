var path = require('path')
var webpack = require("webpack");

module.exports = {
  entry: {
    'main': './src/client/main.js',
  },

  output: {
    path: './dist/',
    filename: "[name].js",
  },

  resolve: {
    root: [
      path.resolve(__dirname, './node_modules'),
    ],
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    ]
  },
};
