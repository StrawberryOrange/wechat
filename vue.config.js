module.exports = {
    publicPath: './',
    assetsDir: 'static',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://129.28.101.84:8000/',
                // target: 'http://192.168.43.227:8000/',
                // ws: true,
                // changeOrigin: true
                pathRewrite: { '^/api': '' }
            }
        }
    }
}