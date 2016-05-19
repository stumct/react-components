const webpack = require('webpack');
const path = require('path');

const APP = path.resolve(__dirname + '/src');
const BUILD = path.resolve(__dirname + '/dist');

module.exports = {
  entry: {
    app: APP+'/index.jsx'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD,
    filename: 'components.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      include: APP
    }]
  },

  plugins: [  
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};