const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './client/main.js',
    output: {
      path: __dirname, //
      filename: './public/bundle.js'
    },
    devtool: 'source-map',
  }
