const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  entry: {
    polyfills: './src/polyfills',
    vendor: './src/vendor',
    main: './src/main'
  },

  output: {
      path: root('build'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
  },

  resolve: {
      extensions: ['', '.js', '.ts'],
      modules: [root('src'), 'node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ]
      },

      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },

      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [root('src/index.html')]
      }
    ]
  },
  
  devtool: 'source-map',

  devServer: {
    contentBase: root('build')
  },

  plugins: [
    new ForkCheckerPlugin(),

    new webpack.optimize.CommonsChunkPlugin({ 
      name: ['vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'dependency'
    }),
  ]
};

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}