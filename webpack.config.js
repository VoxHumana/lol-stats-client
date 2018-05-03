const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?url=false']
      },
      { test: /\.(png|jpg|svg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [htmlPlugin]
}
