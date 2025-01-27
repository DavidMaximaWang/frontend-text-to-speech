const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i, // CSS files
          use: ['style-loader', 'css-loader'], // Loaders for CSS
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html',
      }),
    ],
    mode: 'development',
    devServer: {
      static: './dist',
      port: 8080,
    },
  };
  