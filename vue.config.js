const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
        // jquery和semantic的相关配置
        new webpack.ProvidePlugin({
          $:"jquery",

          jQuery:"jquery",
          "windows.jQuery":"jquery",

          semantic     : 'semantic-ui-css',
          Semantic     : 'semantic-ui-css',
          'semantic-ui': 'semantic-ui-css'
        })
    ],
    resolve:{
      alias:{
        'assets': '@/assets',
      }
    }
  },

  devServer:{
    // 解决跨域问题 此方法仅适用于开发阶段 在生产阶段中需使用nginx来解决跨域问题
    proxy: {
      "/api": {
        // api中mid 为 b站用户id pn为页面数目 ps为视频信息数目
        target: "http://api.bilibili.com/x/space/arc/search?mid=28284616&pn=1&ps=30",// 要访问的接口域名 主页接口
        ws: true,// 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}






