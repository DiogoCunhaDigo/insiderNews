'use strict';

var configurations = require('./configurations/index.js');
var defaultWebServer = require(configurations.paths.server + '/web-server/index.js');

function createCore(spec) {
	spec = spec || {};
	var webServer = spec.webServer || defaultWebServer(spec);

	function start() {
		return webServer.start();
	}

	function stop() {
		return webServer.stop();
	}

	// Quando o construtor do "core" for executado, será criado e retornado
	// um novo objeto com a interface pública abaixo.
	return Object.freeze({
		start: start,
		stop: stop
	});
}


module.exports = createCore;
