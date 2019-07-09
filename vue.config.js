// vue.config.js

module.exports = {
    devServer: {
        open: true,
        host: 'kj.yizhidao9.com',
        port: 80,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://api.tmall.xc2018.com.cn',
                ws: false,
                changeOrigin: true
            }
        }
    }
}
