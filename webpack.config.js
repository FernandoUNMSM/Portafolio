const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const CriticalCssPlugin = require('critical-css-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');
module.exports = (env, args) => {
  const {mode} = args
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
      new MiniCssExtractPlugin(),
      // new HtmlCriticalWebpackPlugin({
      //   base: path.resolve(__dirname, 'build'),
      //   src: 'index.html',
      //   dest: 'index.html',
      //   inline: true,
      //   minify: true,
      //   extract: true,
      //   width: 320,
      //   height: 565,
      //   penthouse: {
      //     blockJSRequests: false,
      //   },
      // }),
      // new CriticalCssPlugin({
      //   base: path.resolve(__dirname, 'build'),
      //   width: 1075,
      //   height: 1565
      // }),
      // new CleanWebpackPlugin()
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
          use: 'pug-loader'
        },
        {
          test: /.(scss|css)$/,
          use: [mode !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ]
    }
  }
}