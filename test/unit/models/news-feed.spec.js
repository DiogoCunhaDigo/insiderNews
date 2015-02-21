'use strict';

var chai = require('chai');
var configurations = require('../../../core/configurations/index.js');
var createNewsFeed = require(configurations.paths.models + 'news-feed.js');
var createNewsFeedRepository = require('../mocks/news-feed.repository.js');

describe('[model] newsFeed', function () {

  it('deve ser uma Factory (função)', function() {
    createNewsFeed.should.be.a('function');
  });

  it('deve retornar erro quando executado sem repositório', function() {
    chai.expect(function(){
      createNewsFeed();
    }).to.throw(Error);
  });

  it('deve retornar um objeto quando executado com repositório', function() {
    var repository = createNewsFeedRepository();

    createNewsFeed( { repository: repository } ).should.be.a('object');
  });

  describe('#find()', function() {

    it('deve resolver uma Promise', function() {
      var repository = createNewsFeedRepository();
      var newsFeed = createNewsFeed( {repository: repository } );
      var findPromise = newsFeed.find();

      findPromise
        .then(function(news){
          news.should.be.a('array');
        });

      return findPromise.should.be.fulfilled;

    });

    it('deve resolver uma Promise com array de notícias', function() {
      var repository = createNewsFeedRepository();
      var newsFeed = createNewsFeed( {repository: repository } );
      var findPromise = newsFeed.find();

      return findPromise
        .then(function(news){
          return news.should.be.a('array');
        });

    });

  });

});
