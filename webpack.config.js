const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')

const HtmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src', 'index.html'),
  filename: 'index.html',
  inject: 'body',
})

const UglifyPlugin = new UglifyJsPlugin({
  cache: true,
  parallel: true,
  sourceMap: true,
})

module.exports = {
  entry: {
    app: ['./src/index.jsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  plugins: [ 
    HtmlPlugin,
    new FlowBabelWebpackPlugin(),
  ],
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      UglifyPlugin,
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',    
            query: {
              presets: ['react', 'env'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },       
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ],
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}