const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicPath = (path) => `./public/${path}`;

module.exports = {

  entry: ['./src/core/app.js'],
  output: {
    filename: publicPath('bundle.js'),
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new ExtractTextPlugin(publicPath('styles.css'), {
      allChunks: true,
    }),
  ],

}
