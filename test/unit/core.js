var configurations = require('../../core/configurations/index.js');
var createCore = require(configurations.paths.core + 'index.js');

describe('createCore', function() {
  
  describe('#start()', function() {
    it('deve iniciar o core do insiderNews', function() {
      var core = createCore();
      var startPromise = core.start();
      
      startPromise
        .then(function() {
          core.stop();
        })
  
      return startPromise.should.be.fulfilled;
    })
    
  })
  
})