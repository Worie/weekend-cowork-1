const path = require('path');
const bundlePath = path.join(__dirname, '../', 'dist');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  entry: './src/front.ts',
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
    path: bundlePath
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
};
