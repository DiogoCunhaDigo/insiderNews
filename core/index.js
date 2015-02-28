'use strict';

var _ = require('lodash');
var configurations = require('./configurations/index.js');
var defaultWebServer = require(configurations.paths.server + '/web-server/index.js');
var userConfigurations = require('../content/configurations.js');
var database = require(configurations.paths.server + '/database/index.js');


function createCore(spec) {

  spec = _.merge({}, spec, userConfigurations);
  var webServer = spec.webServer || defaultWebServer(spec);


  function start() {
    return new Promise(function startPromise(resolve, reject) {

      database
        .start()
        .then(startWebServer)
        .then(finish);

      function startWebServer() {
        return webServer.start();
      }

      function finish(webServerHostAndPort) {
        resolve(webServerHostAndPort);
      }

    });

  }


  function stop() {
      return webServer.stop();
  }


  // Quando o construtor do "core" for executado, será retornado
  // um novo objeto com a interface pública abaixo.
  return {
      start: start,
      stop: stop
  };
}


module.exports = createCore;
