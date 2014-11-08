var path = require('path');
var rootPath = path.resolve(__dirname, '../../');;
var configurations = {};

configurations.paths = {
    server: path.join(rootPath, 'core/server/')
}

module.exports = configurations;