var path = require('path');
var rootPath = path.resolve(__dirname, '../../');
var configurations = {};

configurations.paths = {
    core: path.join(rootPath, 'core/'),
    server: path.join(rootPath, 'core/server/'),
    serverFeatures: path.join(rootPath, 'core/server/features/')
}

configurations.defaults = {
    webServerHost: '0.0.0.0',
    webServerPort: 8181
}

module.exports = configurations;