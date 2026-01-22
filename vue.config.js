module.exports = {
  // Use an array here for compatibility with older Vue CLI versions
  publicPath: '/',
  outputDir: './',
  transpileDependencies: [],

  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}