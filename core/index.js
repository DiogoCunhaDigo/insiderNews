var configurations = require('./configurations/index.js');
var defaultWebServer = require(configurations.paths.server + '/web-server/index.js');

function core(spec) {
	var spec = spec || {};
	var server = spec.server || defaultWebServer();

	function start() {
		return server.start();
	}

	// Quando o construtor do "core" for executado, será criado e retornado
	// um novo objeto com a interface pública abaixo.
	return Object.freeze({
		start: start
	});
}


module.exports = core;