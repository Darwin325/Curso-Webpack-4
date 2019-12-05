const path = require('path')
const MiniCSSExtactPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: {
      home: path.resolve(__dirname, 'src', 'js', 'index.js'),
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
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
      new MiniCSSExtactPlugin({
         filename: 'css/[name].css'
      }),
      new HtmlWebpackPlugin({
         title: 'Plugins'
      })
   ],
}