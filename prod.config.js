const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
	
module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: './src/index.html', 
        minify:  {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }
          
    })
  ]

};
