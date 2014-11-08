var express = require('express');
var defaultExpresApp = express();
var Promise = require('native-promise-only');

function createWebServer(spec) {
  var spec = spec || {};
  var app = spec.app || defaultExpresApp;
  var httpServer;

  function start() {
    return new Promise(function(resolve, reject){
      httpServer = app.listen(spec.webServerPort, spec.webServerHost, function serverListen() {
        var host = httpServer.address().address;
        var port = httpServer.address().port;
        
        resolve({
          host: host,
          port: port
        });
      });
    });
  }

  return Object.freeze({
    start: start
  });
}

module.exports = createWebServer;