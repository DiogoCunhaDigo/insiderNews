'use strict';

var configurations = require('../../configurations/index.js');
var express = require('express');
var swig = require('swig');
var createFeatures = require(configurations.paths.server + 'features.js');

function createWebServer(spec) {
  spec = spec || {};
  var host = spec.webServerHost || configurations.defaults.webServerHost;
  var port = spec.webServerPort || configurations.defaults.webServerPort;
  var app = spec.app || express();
  var features = spec.features || createFeatures();
  var httpServer;

  function start() {
    configureApp();
    return startHttpServer();
  }

  function configureApp() {
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
        var host = httpServer.address().address;
        var port = httpServer.address().port;

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
