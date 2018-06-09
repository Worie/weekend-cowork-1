const path = require('path');
const bundlePath = path.join(__dirname, '../', 'dist');

module.exports = {
  entry: './src/frontend.ts',
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
};
