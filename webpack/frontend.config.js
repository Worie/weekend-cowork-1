const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const bundlePath = path.join(__dirname, '../', 'dist');

module.exports = {
  entry: './src/frontend/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle-frontend.js',
    path: bundlePath,
  },
  stats: 'errors-only',
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: './src/frontend/index.html',
      filename: './index.html'
    }),
  ],
};
