var path = require('path');
var rootPath = path.resolve(__dirname, '../../');
var configurations = {};

configurations.paths = {
    server: path.join(rootPath, 'core/server/')
}

configurations.defaults = {
    webServerHost: '0.0.0.0',
    webServerPort: 8181
}

module.exports = configurations;