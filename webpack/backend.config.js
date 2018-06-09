const path = require('path');
const bundlePath = path.join(__dirname, '../', 'dist');

const NodemonPlugin = require('nodemon-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/backend.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle-backend.js',
    path: bundlePath
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),
    new NodemonPlugin()
  ]
};
 