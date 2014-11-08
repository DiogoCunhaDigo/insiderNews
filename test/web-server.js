var configurations = require('../core/configurations');
var createWebServer = require(configurations.paths.server + 'web-server/index.js');

describe('createWebServer', function() {
  
  it('.start() should start with default configurations', function() {
    var webServer = createWebServer();
    var startPromise = webServer.start();
    
    startPromise
      .then(function() {
        return webServer.stop();
      })
      .then(function() {
        return startPromise;
      })
    
  })
  
  it('.stop() should stop the web server', function() {
    var webServer = createWebServer();
    var stopPromise;
    
    webServer.start()
      .then(function() {
        stopPromise = webServer.stop();
        return stopPromise.should.be.fulfilled;
      })
    
  })
})

