const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api', 
        createProxyMiddleware({
            target: 'http://localhost:8080', // /api -> http://localhost:8080/api
            changeOrigin: true,
            pathRewrite: {
                '^/api' : '' // http://localhost:8080/api -> http://localhost:8080
        }
    }));
};