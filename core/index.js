'use strict';

var _ = require('lodash');
var configurations = require('./configurations/index.js');
var defaultWebServer = require(configurations.paths.server + '/web-server/index.js');
var userConfigurations = require('../content/configurations.js');

function createCore(spec) {
  spec = _.merge({}, spec, userConfigurations);

  var webServer = spec.webServer || defaultWebServer(spec);

  function start() {
      return webServer.start();
  }

  function stop() {
      return webServer.stop();
  }

  // Quando o construtor do "core" for executado, será criado e retornado
  // um novo objeto com a interface pública abaixo.
  return {
      start: start,
      stop: stop
  };
}


module.exports = createCore;
