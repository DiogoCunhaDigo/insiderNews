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


  describe('@data', function() {

    it('deve estar em branco quando iniciado sem dados', function() {
      var repository = createMockRepository();
      var news = createNews({
        repository: repository
      });

      chai.expect(news.data).to.be.deep.equal({});

    });

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


  describe('#find', function() {
    var newsInsideDatabase;

    beforeEach(function() {

      newsInsideDatabase = {
        "lastComment": "hf: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "slug": "black-friday-nos-eua-tem-filas-e-muitos-brasileiros",
        "title": "Black Friday nos EUA tem filas e muitos brasileiros",
        "uuid": "8fc38d1a-9f3e-11e4-89d3-123b93f75cba",
        "xp": 100
      };

    });

    it('deve ser uma função', function() {
      var news = createNews({
        repository: createMockRepository()
      });

      chai.expect(news.find).to.be.a('function');

    });

    it('quando executada deve retornar uma Promise', function() {
      var news = createNews({
        repository: createMockRepository()
      });

      var findPromise = news.find();
      findPromise.should.have.property('then');
      findPromise.should.have.property('catch');

    });

    it('deve executar a query e retornar a notícia resolvendo a promise', function() {

      var news = createNews({
        repository: createMockRepository()
      });

      var findPromise = news.find({ slug: 'black-friday-nos-eua-tem-filas-e-muitos-brasileiros'});

      return findPromise.should.eventually.deep.equal(newsInsideDatabase);

    });

    it('deve executar a query e atualizar o @data internamente', function(done) {

      var news = createNews({ repository: createMockRepository() });
      news
        .find({ slug: 'black-friday-nos-eua-tem-filas-e-muitos-brasileiros'})
        .then(function() {
          chai.expect(news.data).to.be.deep.equal(newsInsideDatabase);
          done();
        });

    });

  });


  describe('#update', function() {

    it('deve ser uma função', function() {
      var news = createNews({ repository: createMockRepository() });

      chai.expect(news.update).to.be.a('function');
    });

    it('quando executada deve retornar uma Promise', function() {
      var news = createNews({ repository: createMockRepository() });

      var updatePromise = news.update();
      updatePromise.should.have.property('then');
      updatePromise.should.have.property('catch');
    });

    it('quando executado sem parâmetros deve se auto-atualizar contra o repositório', function() {
      var news = createNews({ repository: createMockRepository() });

      return news
        .find({ slug: 'brasil-cresce-so-01-com-gastos-publicos'})
        .then(changeData)
        .then(updateModel)
        .then(compareResults);

      function changeData(){
        news.data.xp = 500;
        news.data.title = 'Novo título para notícia que será atualizada';
        news.updateSlug();
      }

      function updateModel() {
        return news.update();
      }

      function compareResults(updatedNewsResult) {
        return chai.expect(updatedNewsResult).to.be.deep.equal(news.data);
      }

    });

  });


  describe.only('#remove', function() {

    it('deve ser uma função', function() {
      var news = createNews({ repository: createMockRepository() });

      chai.expect(news.remove).to.be.a('function');
    });

    it('quando executada deve retornar uma Promise', function() {
      var news = createNews({ repository: createMockRepository() });

      var removePromise = news.remove();
      removePromise.should.have.property('then');
      removePromise.should.have.property('catch');
    });

    it('quando executada deve remover o item do repositório', function() {
      var news = createNews({ repository: createMockRepository() });

      return news.remove().should.be.fulfilled;
    });


  });


  describe('#updateSlug', function() {

    it('deve gerar um slug a partir do título', function() {
      var repository = createMockRepository();
      var newsData;
      var news;

      newsData = {
        title: 'ÁÉÍÓÚ AEIOU áéíóú aeiou ÂÇç $  @ = *(){}[]/ | 100%;,#~ !'
      };

      news = createNews({
        data: newsData,
        repository: repository
      });

      news.updateSlug();

      chai.expect(news.data.slug).to.be.equal('aeiou-aeiou-aeiou-aeiou-acc-dollar-@-*()-or-100~-!');

    });

  });

});
