'use strict';

Promise = require('bluebird');
let _ = require('lodash');
let configurations = require('./configurations/index.js');
let defaultWebServer = require(configurations.paths.server + '/web-server/index.js');
let userConfigurations = require('../content/configurations.js');
let database = require(configurations.paths.server + '/database/index.js');

class Core {
	constructor(spec) {
		this.spec = _.merge({}, spec, userConfigurations);
		this.webServer = this.spec.webServer || defaultWebServer(spec);
	}

	start() {
		return new Promise((resolve, reject) => {

			database
			.start()
			.bind(this)
			.then(startWebServer)
			.then(finish)
			.catch(reject);

			function startWebServer() {
				return this.webServer.start();
			}

			function finish(webServerHostAndPort) {
				resolve(webServerHostAndPort);
			}

		});
	}

	stop() {
		return this.webServer.stop();
	}
}

module.exports = Core;
