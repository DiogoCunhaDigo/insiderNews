var configurations = require('./configurations/index.js');
var defaultWebServer = require(configurations.paths.server + '/web-server/index.js');

function createCore(spec) {
	var spec = spec || {};
	var server = spec.server || defaultWebServer(spec);

	function start() {
		return server.start();
	}

	// Quando o construtor do "core" for executado, será criado e retornado
	// um novo objeto com a interface pública abaixo.
	return Object.freeze({
		start: start
	});
}


module.exports = createCore;