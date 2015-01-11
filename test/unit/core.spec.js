'use strict';

var configurations = require('../../core/configurations/index.js');
var createCore = require(configurations.paths.core + 'index.js');

describe('core [feature]', function() {

  it('deve ser uma Factory (função)', function() {
    createCore.should.be.a('function');
  });

  it('deve retornar um objeto quando executado', function() {
    createCore().should.be.a('object');
  });

  describe('#start()', function() {
    it('deve resolver uma Promise e iniciar o core do insiderNews', function() {
      var core = createCore();
      var startPromise = core.start();

      startPromise
        .then(function() {
          core.stop();
        });

      return startPromise.should.be.fulfilled;
    });

  });

});
