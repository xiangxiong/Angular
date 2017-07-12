var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context:path.join(__dirname),
  entry:"./src/app/app.js",
  output:{
    path:__dirname,
    filename:"./src/bundle.js"
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader:'babel-loader',
        query:{
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|ttf|woff2|wav|mp3)$/,
        loader: 'file-loader',
      },
      {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'html-loader'
      },
      {
　　　　　　test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
　　　　  　loader: 'url-loader?limit=100000'
　　　}
    ]
  },
  plugins: [
    //generate html
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
]
};
