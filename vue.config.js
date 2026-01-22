module.exports = {
  // Use an array here for compatibility with older Vue CLI versions
  publicPath: '/',
  outputDir: 'dist',
  transpileDependencies: [],

  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}