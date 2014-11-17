var path = require('path');
var rootPath = path.resolve(__dirname, '../../');
var configurations = {};

configurations.paths = {
    core: path.join(rootPath, 'core/'),
    server: path.join(rootPath, 'core/server/'),
    serverFeatures: path.join(rootPath, 'core/server/features/')
}

configurations.defaults = {
    webServerHost: process.env.INSIDERNEWS_HOST || process.env.HOST || '0.0.0.0',
    webServerPort: process.env.INSIDERNEWS_PORT || process.env.PORT || 8181
}

module.exports = configurations;