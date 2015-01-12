'use strict';

var configurations = require('../../../core/configurations/index.js');
var createFeatures = require(configurations.paths.server + 'features.js');

describe('features [feature]', function () {

  it('deve ser uma Factory (função)', function() {
    createFeatures.should.be.a('function');
  });

  it('deve retornar um objeto quando executado', function() {
    createFeatures().should.be.a('object');
  });

  describe('#getRouters', function() {

    it('deve retornar um array com funções Routers do Express', function() {
      var routers = createFeatures().getRouters();

      routers.should.be.a('array');

      routers.forEach(function(router) {
        router.should.be.a('function');
        router.should.have.property('stack');
      });

    });

  });

});
