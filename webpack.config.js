const appRootPath = require('app-root-path');
const nodeExternals = require('webpack-node-externals');

module.exports = [{
  entry: './src-fe/index.jsx',
  output: {
    filename: 'bundle.js',
    path: appRootPath + '/dist-fe'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}, {
  entry: './src-be/index.jsx',
  output: {
    filename: 'bundle.js',
    path: appRootPath + '/dist-be'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.hbs']
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}];
