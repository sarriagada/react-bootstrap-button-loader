var webpack       = require('webpack');
var path          = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry:   [
    './src/ButtonLoader'
  ],
  output:  {
    path:          path.join(__dirname, 'dist'),
    filename:      'ButtonLoader.js',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module:  {
    loaders: [
      { include: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: [ 'node_modules' ],
    extensions: ['', '.js', '.jsx']
  }
};


