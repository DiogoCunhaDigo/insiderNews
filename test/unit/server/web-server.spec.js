'use strict';

var configurations = require('../../../core/configurations/index.js');
var createWebServer = require(configurations.paths.server + 'web-server/index.js');

describe('[feature] webServer', function() {

  it('deve ser uma Factory (função)', function() {
    createWebServer.should.be.a('function');
  });

  it('deve retornar um objeto quando executado', function() {
    createWebServer().should.be.a('object');
  });

  describe('#start()', function() {
    it('deve resolver uma Promise e iniciar o servidor web', function() {
      var webServer = createWebServer();
      var startPromise = webServer.start();

      startPromise
        .then(function() {
          webServer.stop();
        });

      return startPromise.should.be.fulfilled;
    });

    it('deve retornar host e port padrões se nenhum spec for definido', function() {
      var webServer = createWebServer();
      var startPromise = webServer.start();
      var defaultStartPromiseReturn = {
        host: configurations.defaults.webServerHost,
        port: configurations.defaults.webServerPort
      };

      startPromise
        .then(function() {
          webServer.stop();
        });

      return startPromise.should.eventually.deep.equal(defaultStartPromiseReturn);
    });

    it('deve retornar host e port customizados se spec for definido', function() {
      var customWebServerSpec = {
        webServerHost: '127.0.0.1',
        webServerPort: 9999
      };

      var webServer = createWebServer(customWebServerSpec);
      var startPromise = webServer.start();

      startPromise
        .then(function() {
          webServer.stop();
        });

      return startPromise.should.eventually.deep.equal({
        host: customWebServerSpec.webServerHost,
        port: customWebServerSpec.webServerPort
      });
    });

  });


  describe('#stop()', function() {

    it('deve resolver uma Promise e parar o servidor web', function() {
      var webServer = createWebServer();
      var stopPromise;

      return webServer
        .start()
        .then(function() {
          stopPromise = webServer.stop();
          return stopPromise.should.be.fulfilled;
        });
    });

  });

});
