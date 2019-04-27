const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: [
      '@babel/polyfill',
      './client/main.js',
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      extensions: ['.js']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          loader: 'babel-loader'
        }
      ]
    }
  }
