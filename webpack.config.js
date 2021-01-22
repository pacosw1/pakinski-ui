const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            pakinskiui: path.join(__dirname, 'src')
          }
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
    externals:  {
        'styled-components': 'styled-components',
        react: 'commonjs react',
        'react-dom': 'commonjs react-dom'
      }
};
  