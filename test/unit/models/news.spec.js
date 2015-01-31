'use strict';

var chai = require('chai');
var configurations = require('../../../core/configurations/index.js');
var createNews = require(configurations.paths.models + 'news.js');
var createMockRepository = require('../mocks/stream.repository.js');

describe('[model] news', function() {

  it('deve ser uma Factory (função)', function() {
    createNews.should.be.a('function');
  });

  it('deve retornar erro quando executado sem repositório', function() {
    chai.expect(function(){
      createNews();
    }).to.throw(Error);
  });

  it('deve retornar um objeto quando executado com repositório', function() {
    var repository = createMockRepository();

    createNews({ repository: repository }).should.be.a('object');
  });

  describe('#save', function() {

    it('deve criar uma nova notícia e resolver a promise', function() {
      var repository = createMockRepository();
      var newsData;
      var news;

      newsData = {
        title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.'
      };

      news = createNews({
        data: newsData,
        repository: repository
      });

      return news.save().should.be.fulfilled;

    });

  });

});
