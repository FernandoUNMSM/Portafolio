const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {
  return {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.pug')
      }),
      new CopyPlugin({
        patterns: [
          { from: "src/assets", to: "assets" },
        ],
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'src'),
      },
      open: true, // para abrir el navegador
      port: 3001,
    },
    module: {
      rules: [
        {
          test: /.pug$/,
          loader: 'pug-loader'
        },
        {
          test: /.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ]
    }
  }
}