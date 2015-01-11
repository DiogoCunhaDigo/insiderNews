'use strict';

var path = require('path');
var rootPath = path.resolve(__dirname, '../../');
var configurations = {};

configurations.paths = {
    core: path.join(rootPath, 'core/'),
    server: path.join(rootPath, 'core/server/'),
    client: path.join(rootPath, 'core/client/'),
    assets: path.join(rootPath, 'core/assets/'),
    models: path.join(rootPath, 'core/models/'),
    content: {
        themes: path.join(rootPath, 'content/themes/')
    }
};

configurations.defaults = {
    webServerHost: process.env.INSIDERNEWS_HOST || process.env.HOST || '0.0.0.0',
    webServerPort: +process.env.INSIDERNEWS_PORT || +process.env.PORT || 8181,
    cacheServerViews: false,
    staticMaxAge: 60*60*24
};

module.exports = configurations;
