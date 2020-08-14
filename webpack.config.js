const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer : {
    port: 2021, 
    open: true
  }, 
  module:{
    rules: [
      {
        test: /\.(scss)$/,
        use: [
        {
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }
      ]
      }, 
      {
        test: /\.html$/i,
        loader: 'html-loader',        
      }, 
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader : 'file-loader',
            options : {
               //name : '[name].[ext]', 
               outputPath : 'img/', 
               publicPath : 'img/'
            }
          }
        ]
      }, 
    ]
 }, 
  plugins: [
    new HTMLWebpackPlugin({
        template: './src/index.html', 
        favicon: './src/imagenes/favicon-32x32.png', 
        minify:  {
            collapseWhitespace: false,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }
          
    })
  ]

};
