var configurations = require('../../core/configurations/index.js');
var createFeatures = require(configurations.paths.serverFeatures + 'index.js');

describe('createFeatures[server]', function () {

  it('deve ser uma função', function() {
    createFeatures.should.be.a('function');
  })

  it('deve retornar um objeto quando executado', function() {
    createFeatures().should.be.a('object');
  })
  

})
