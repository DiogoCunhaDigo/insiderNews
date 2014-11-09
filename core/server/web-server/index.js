var configurations = require('../../configurations/index.js');
var express = require('express');
var Promise = require('native-promise-only');

function createWebServer(spec) {
  var spec = spec || {};
  var host = spec.webServerHost || configurations.defaults.webServerHost;
  var port = spec.webServerPort || configurations.defaults.webServerPort;
  var app = spec.app || express();
  var httpServer;
  
  function start() {
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
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