const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './client/main.js', // this is the program's starting point
    output: {
      path: __dirname, //
      filename: './public/bundle.js' // the webpack bundle is stored in the public directory
    },
    devtool: 'source-map',
  }
