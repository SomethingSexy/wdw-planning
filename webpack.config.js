const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/client/index.tsx',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [/node_modules/, /src\/server/],
        options: {
          configFile: 'client.tsconfig.json'
        }
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: [/node_modules/, /src\/server/],
        options: {
          configFile: 'client.tsconfig.json'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.ejs',
    })
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'public/bundle.js',
    path: path.resolve(__dirname, 'lib')
  }
};

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const path = require('path');
// const webpack = require('webpack');

// const plugins = [
//   new HtmlWebpackPlugin({
//     template: './src/index.ejs',
//     filename: '../index.html'
//   }),
//   new ExtractTextPlugin({
//     filename: 'style.css',
//     disable: false,
//     allChunks: true
//   })
// ];

// module.exports = {
//   entry: [
//     './src/index.tsx'
//   ],
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     // publicPath: '/public',
//     filename: '[hash].bundle.js'
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js', '.jsx']
//   },
//   plugins,
//   // Enable this if you want to generate source maps for the Panda client
//   //   [http://webpack.github.io/docs/configuration.html#devtool]
//   // devtool: "#inline-source-map",
//   module: {
//     rules: [{
//       test: /\.ts$/,
//       exclude: /node_modules/,
//       include: [
//         path.resolve(__dirname),
//         path.resolve(__dirname, '../src')
//       ],
//       enforce: 'pre',
//       loader: 'tslint-loader',
//       options: {
//         typeCheck: true,
//         emitErrors: true
//       }
//     }, {
//       test: /\.tsx?$/,
//       loader: 'ts-loader',
//     }, {
//       test: /\.css$/,
//       use: ExtractTextPlugin.extract({
//         fallback: 'style-loader',
//         use: ['css-loader']
//       })
//     }, {
//       test: /\.less$/,
//       use: ExtractTextPlugin.extract({
//         fallback: 'style-loader',
//         use: ['css-loader', 'less-loader']
//       })
//     }, {
//       test: /\.(eot|woff|woff2|ttf|svg|png|jpg|jpeg)(\?v=\d+.\d+.\d+)?$/,
//       use: [{
//         loader: 'url-loader',
//         options: {
//           name: '/[name]-[hash].[ext]',
//           limit: '10000'
//         }
//       }]
//     }]
//   }
// };

