var configurations = require('../core/configurations');
var createWebServer = require(configurations.paths.server + 'web-server/index.js');

describe('createWebServer', function() {
  
  it('#start() should start with default configurations', function() {
    var webServer = createWebServer();
    var startPromise = webServer.start();
    
    startPromise
      .then(function(server) {
        server.host.should.equal('0.0.0.0');
        webServer.stop();
      })
      .catch(function() {
        webServer.stop();
      })

      return startPromise.should.be.fulfilled;
  })
  
  it('#stop() should stop the web server', function() {
    var webServer = createWebServer();
    
    return webServer
      .start()
      .then(function() {
        return webServer.stop().should.be.fulfilled;
      })
    
  })
})

