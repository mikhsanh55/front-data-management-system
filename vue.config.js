module.exports = {
  publicPath: '/',
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  },
  devServer: {
  	proxy: 'https://api.sabalkes.com',
    historyApiFallback:true
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  },
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(400000)
      .maxAssetSize(400000)
  }
}
