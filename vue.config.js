module.exports = {
    publicPath: './',
    assetsDir: 'static',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://129.28.101.84/',
                // ws: true,
                // changeOrigin: true
                pathRewrite: { '^/api': '' }
            }
        }
    }
}