'use strict';

var chai = require('chai');
var configurations = require('../../../core/configurations/index.js');
var createNewsFeedStream = require(configurations.paths.models + 'news-feed-stream.js');
var createMockRepository = require('../mocks/news-feed-stream.repository.js');


describe('newsFeedStream [model]', function () {

  it('deve ser uma Factory (função)', function() {
    createNewsFeedStream.should.be.a('function');
  });

  it('deve retornar erro quando executado sem repositório', function() {
    chai.expect(function(){
      createNewsFeedStream();
    }).to.throw(Error);
  });

  it('deve retornar um objeto quando executado com repositório', function() {
    var repository = createMockRepository();


    createNewsFeedStream({ repository: repository }).should.be.a('object');
  });

  it('deve conter a propriedade "events"', function() {
    var repository = createMockRepository();
    var newsFeedStream = createNewsFeedStream({ repository: repository });

    newsFeedStream.should.have.property('events');
    newsFeedStream.should.be.a('object');
  });

  it('deve conter o método "start"', function() {
    var repository = createMockRepository();
    var newsFeedStream = createNewsFeedStream({ repository: repository });

    newsFeedStream.should.have.property('start');
    newsFeedStream.start.should.be.a('function');
  });

  describe('#events', function() {

    it('deve conter a propriedade "on"', function() {
      var repository = createMockRepository();
      var newsFeedStream = createNewsFeedStream({ repository: repository });

      newsFeedStream.events.should.have.property('on');
    });

    it('deve conter a propriedade "emit"', function() {
      var repository = createMockRepository();
      var newsFeedStream = createNewsFeedStream({ repository: repository });

      newsFeedStream.events.should.have.property('emit');
    });

    it('"on" deve receber as mensagens enviadas por "emit"', function(done) {
      var repository = createMockRepository();
      var newsFeedStream = createNewsFeedStream({ repository: repository });

      newsFeedStream.events.on('onEmitTest', function onEmitTest(testArray) {
        testArray.should.be.a('array');
        done();
      });

      newsFeedStream.events.emit('onEmitTest', [1,2,3,4,5]);
    });

  });


  describe('#start', function() {

    it('quando executado deve emitir o evento "started"', function(done) {
      var repository = createMockRepository();
      var newsFeedStream = createNewsFeedStream({ repository: repository });

      newsFeedStream.events.on('started', function onStart() {
        done();
      });

      newsFeedStream.start();

    });

    it('quando repositório iniciar deve emitir o evento "repository:started"', function(done) {
      var repository = createMockRepository();
      var newsFeedStream = createNewsFeedStream({ repository: repository });

      newsFeedStream.events.on('repository:started', function onStart() {
        done();
      });

      newsFeedStream.start();

    });


  });


  describe('#stop', function() {

    it('quando executado deve emitir o evento "stopped"', function(done) {
      var repository = createMockRepository();
      var newsFeedStream = createNewsFeedStream({ repository: repository });

      newsFeedStream.events.on('stopped', function onStop() {
        done();
      });

      newsFeedStream.stop();

    });

    it('quando repositório parar deve emitir o evento "repository:stopped"', function(done) {
      var repository = createMockRepository();
      var newsFeedStream = createNewsFeedStream({ repository: repository });

      newsFeedStream.events.on('repository:stopped', function onStart() {
        done();
      });

      newsFeedStream.stop();

    });


  });
});
