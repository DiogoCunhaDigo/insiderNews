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
  
        return startPromise.should.be.fulfilled;
    })
    
    it('should return default values when no one specified', function() {
      var webServer = createWebServer();
      var startPromise = webServer.start();
      var defaultPromiseReturn = {
        host: configurations.defaults.webServerHost,
        port: configurations.defaults.webServerPort
      }
      
      startPromise
        .then(function() {
          webServer.stop();
        })
  
        return startPromise.should.eventually.deep.equal(defaultPromiseReturn);
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