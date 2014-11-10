var configurations = require('../../core/configurations/index.js');
var createWebServer = require(configurations.paths.server + 'web-server/index.js');

describe('createWebServer', function() {
  
  describe('#start()', function() {
    it('deve iniciar o servidor web', function() {
      var webServer = createWebServer();
      var startPromise = webServer.start();
      
      startPromise
        .then(function() {
          webServer.stop();
        })
  
      return startPromise.should.be.fulfilled;
    })
    
    it('deve retornar host e port padrões se nenhum spec for definido no construtor', function() {
      var webServer = createWebServer();
      var startPromise = webServer.start();
      var defaultStartPromiseReturn = {
        host: configurations.defaults.webServerHost,
        port: configurations.defaults.webServerPort
      }
      
      startPromise
        .then(function() {
          webServer.stop();
        })
  
      return startPromise.should.eventually.deep.equal(defaultStartPromiseReturn);
    })
    
    it('deve retornar host e port customizados se spec for definido no construtor', function() {
      var customWebServerSpec = {
        webServerHost: '127.0.0.1',
        webServerPort: 9999
      };
      
      var webServer = createWebServer(customWebServerSpec);
      var startPromise = webServer.start();
      
      startPromise
        .then(function() {
          webServer.stop();
        })
  
      return startPromise.should.eventually.deep.equal({
        host: customWebServerSpec.webServerHost,
        port: customWebServerSpec.webServerPort
      });
    })
    
  })
  
  
  describe('#stop()', function() {
    
    it('deve parar o servidor web', function() {
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