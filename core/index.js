var configurations = require('./configurations/index.js');
var defaultWebServer = require(configurations.paths.server + '/web-server/index.js');

function core(spec) {
	var spec = spec || {};
	var name = spec.name || "insiderNews";
	var server = spec.server || defaultWebServer();

	function start() {
		server.start();
	}

	function getName() {
		return name;
	}

	// Quando o construtor do "core" for executado, será criado e retornado
	// um novo objeto com a interface pública abaixo.
	return Object.freeze({
		start: start,
		getName: getName
	});
}


module.exports = core;