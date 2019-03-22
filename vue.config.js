module.exports = {
  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
    port: 8080, // 端口地址
    https: false, // 使用https提供服务

    // string | Object 代理设置
    proxy: {
      '/repos': {
        target: 'https://c.y.qq.com',
        changeOrigin: true
        // pathRewrite: {'^/api': ''}
      }
    },
    progress: true,

    // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
    before: app => {
      // `app` 是一个 express 实例
    }
  }
}