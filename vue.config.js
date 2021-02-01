module.exports={
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            },
            '/download': {
                target: 'http://localhost:4000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/download': '/download'
                }
            }
        }
    }
}