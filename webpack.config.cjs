const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './counter.tsx',
  output: {
    filename: 'counter-wp.bundled.js',
    path: path.resolve(__dirname, './dist-webpack/')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json']
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  }
}
