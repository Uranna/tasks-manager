const path = require("path");
const HtmLWebpackPlagin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true
  },
  mode: "development",
  devtool: 'inline-source-map',
  devServer: './build',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.js$/i,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       preset: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'assets/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'assets/resource'
      }
    ]
  },
  plugins: [
    new HtmLWebpackPlagin({
      title: 'Task Manager',
      minify:true
    })
  ]
};