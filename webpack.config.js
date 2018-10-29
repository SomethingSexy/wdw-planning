const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/client/index.tsx',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: [/node_modules/, /src\/server/],
        options: {
          configFileName: 'client.tsconfig.json'
        }
      },
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
        exclude: [/node_modules/, /src\/server/],
        options: {
          configFileName: 'client.tsconfig.json'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: 'public'
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.ejs',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "public/[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      { from: 'src/client/images/animal-kingdom.jpg', to: 'public/animal-kingdom.jpg' },
      { from: 'src/client/images/magic-kingdom.jpg', to: 'public/magic-kingdom.jpg' }
    ])
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'public/bundle.js',
    path: path.resolve(__dirname, 'lib')
  }
};
