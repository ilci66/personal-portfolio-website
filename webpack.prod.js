// // const path = require('path');

// // module.exports = {
// //   devtool: 'cheap-module-source-map',
// //   mode: 'production',
// //   entry: './src/index.js',
// //   module: {
// //     rules: [
// //       {
// //         test: /\.m?js$/,
// //         include:[path.resolve(__dirname, 'src')],
// //         use: {
// //           loader: 'babel-loader',
// //           options: {
// //             presets: ['@babel/preset-env'],
// //             plugins: ['@babel/transform-runtime']
// //           }
// //         }
// //       }
// //     ]
// //   },
// //   resolve:{
// //       extensions: ['.js'],
// //   },
// //   output: {
// //       filename: 'index.js',
// //       path: path.resolve(__dirname, 'public/assets/js') ,
// //       publicPath: '/', 
// //   },
// // };


// const path = require('path');
// const common = require('./webpack.common');
// const { merge } = require("webpack-merge");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// var HtmlWebpackPlugin = require("html-webpack-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// module.exports = merge(common, {
//     mode: "production",
//     output: {
//       filename: "[name].[contentHash].bundle.js",
//       path: path.resolve(__dirname, "dist")
//     },
//     optimization: {
//       minimizer: [
//         // new OptimizeCssAssetsPlugin(),
//         new CssMinimizerPlugin(),
//         new TerserPlugin(),
//         new HtmlWebpackPlugin({
//           template: "./src/template.html",
//           minify: {
//             removeAttributeQuotes: true,
//             collapseWhitespace: true,
//             removeComments: true
//           }
//         })
//       ]
//     },
//     plugins: [
//       new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
//     //   new CleanWebpackPlugin()
//     ],
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: [
//             MiniCssExtractPlugin.loader, //3. Extract css into files
//             "css-loader", //2. Turns css into commonjs
//             "sass-loader" //1. Turns sass into css
//           ]
//         }
//       ]
//     }
//   });