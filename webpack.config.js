var path = require('path');

const webpack= require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/app.js',
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  performance: {
    hints: false
  },
  devServer:{
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
  },
  // recompiles bundle.js on changes
  watch: true,
  module:{
    // "rules" was previously "loaders:"    
    rules: [
      {
        // loader, scan all js files
        test:/\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-1']
        }
      }
    ]
  }
} 

/* module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  // recompiles bundle.js on changes
  watch: true,
  module:{
    // "rules" was previously "loaders:"    
    rules: [
      {
        // loader, scan all js files
        test:/\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-1']
        }
      }
    ]
  }
} */