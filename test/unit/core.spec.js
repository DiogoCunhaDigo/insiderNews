'use strict';

let configurations = require('../../core/configurations/index.js');
let Core = require(configurations.paths.core + 'index.js');

describe('[feature] core', function() {

  it('deve ser uma Factory (função)', function() {
    Core.should.be.a('function');
  });

  it('deve retornar um objeto quando executado', function() {
    new Core().should.be.a('object');
  });

  describe('#start()', function() {
    it('deve resolver uma Promise e iniciar o core do insiderNews', function() {
      let core = new Core();
      let startPromise = core.start();

      startPromise
        .then(function() {
          core.stop();
        });

      return startPromise.should.be.fulfilled;
    });

  });

});
