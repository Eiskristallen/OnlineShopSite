//config file of this project
  //configuration object of webpack
module.exports = {
  //disable eslint in dev environment
  lintOnSave: false,
  //configure proxy
  devServer:{
    proxy:{
      "^/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" }
      }
    }
  }
}