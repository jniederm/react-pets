'use strict'

// https://webpack.js.org/configuration/

const path = require('path')
const webpack = require('webpack')

const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')
const staticDir = path.resolve(__dirname, 'static')

module.exports = {
  context: srcDir,
  entry: {
    bundle: './index.jsx'
  },
  output: {
    path: distDir,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcDir,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          }
        ]
      },

      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'React Pets',
      filename: 'index.html',
      inject: true,
      template: `${srcDir}/index.html.ejs`
    }),

    new CleanPlugin([distDir]),

    new CopyPlugin([
      { from: staticDir },
      { from: path.resolve(__dirname, 'node_modules/spectre.css/dist') }
    ]),
  ],
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devServer: {
    contentBase: staticDir,
    port: 3000,
    overlay: true
  },
  devtool: 'source-map'
}
