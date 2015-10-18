'use strict';

let configurations = require('../../configurations/index.js');
let express = require('express');
let compression = require('compression');
let swig = require('swig');
let createFeatures = require(configurations.paths.server + 'features.js');

function createWebServer(spec) {
  spec = spec || {};
  let host = spec.webServerHost || configurations.defaults.webServerHost;
  let port = spec.webServerPort || configurations.defaults.webServerPort;
  let app = spec.app || express();
  let features = spec.features || createFeatures();
  let httpServer;

  function start() {
    configureApp();
    return startHttpServer();
  }

  function configureApp() {
    app.use(compression());
    swig.setDefaults({ cache: configurations.defaults.cacheServerViews });

    app.use('/themes/', express.static(configurations.paths.content.themes, {
      maxAge: configurations.defaults.staticMaxAge
    }));

    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', configurations.paths.server);
    app.set('view cache', configurations.defaults.cacheServerViews);
    app.use('/', features.getRouters());

  }

  function startHttpServer() {
    return new Promise(function startHttpServerPromise(resolve, reject) {
      httpServer = app.listen(port, host, function serverListen() {
        let host = httpServer.address().address;
        let port = httpServer.address().port;

        resolve({
          host: host,
          port: port
        });
      });

    });
  }

  function stop() {
    return new Promise(function stopPromise(resolve, reject) {
      httpServer.close(function serverClosed() {
        resolve();
      });
    });
  }

  return Object.freeze({
    start: start,
    stop: stop
  });
}

module.exports = createWebServer;
