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
  	proxy: 'https://api-alkes.herokuapp.com',
    historyApiFallback:true
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  }
}
