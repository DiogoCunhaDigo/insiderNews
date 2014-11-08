var express = require('express');
var defaultExpresApp = express();

function webServer(spec) {
	var spec = spec || {};
	var app = spec.app || defaultExpresApp;
	var httpServer;

	function start() {
	    httpServer = app.listen(3000, function serverListen(){
	        var host = httpServer.address().address
	        var port = httpServer.address().port

	        console.log('Listening at http://%s:%s', host, port)
	    });
	}

	return Object.freeze({
		start: start
	});
}


module.exports = webServer;