module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },{
      test: /\.(scss)$/, // .so = custom file extension
      loader: 'cssobjects-loader?transform=true!sass-loader'
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
