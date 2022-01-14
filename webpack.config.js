const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include:[path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      }
    ]
  },
  resolve:{
      extensions: ['.js'],
  },
  output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'public/assets/js') ,
      publicPath: '/', 
  },
};