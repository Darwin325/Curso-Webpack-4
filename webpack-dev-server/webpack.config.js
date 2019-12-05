const path = require('path')
const MiniCSSExtactPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
   entry: {
      home: path.resolve(__dirname, 'src', 'js', 'index.js'),
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
   },
   devServer: {
      hot: true,
      open: true,
      port: 9000
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               {
                  loader: MiniCSSExtactPlugin.loader
               },
               'css-loader',
            ]
         }
      ]
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCSSExtactPlugin({
         filename: 'css/[name].css'
      }),
      new HtmlWebpackPlugin({
         title: 'Plugins'
      })
   ],
}