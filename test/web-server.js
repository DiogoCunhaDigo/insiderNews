var configurations = require('../core/configurations/index.js');
var createWebServer = require(configurations.paths.server + 'web-server/index.js');

describe('createWebServer', function() {
  
  describe('#start()', function() {
    it('should start with default configurations', function() {
      var webServer = createWebServer();
      var startPromise = webServer.start();
      
      startPromise
        .then(function() {
          webServer.stop();
        })
        .catch(function() {
          webServer.stop();
        })
  
        return startPromise.should.be.fulfilled;
    })
    
  })
  
  
  describe('#stop()', function() {
    
    it('should stop the web server', function() {
      var webServer = createWebServer();
      var stopPromise;
      
      return webServer
        .start()
        .then(function() {
          stopPromise = webServer.stop();
          return stopPromise.should.be.fulfilled;
        })
    })
    
  })
  
})