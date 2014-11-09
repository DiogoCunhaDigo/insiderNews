var configurations = require('../core/configurations/index.js');
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
    
    it('deve retornar o valor padrão se nenhum spec for definido no construtor', function() {
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