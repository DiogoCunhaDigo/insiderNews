'use strict';
let EventEmitter = require('events').EventEmitter;
let _ = require('lodash');

function createStreamMockRepository(spec) {
  spec = spec || {};
  let events = new EventEmitter();
  let newsInDatabase = [
    {
      "lastComment": "hf: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "slug": "black-friday-nos-eua-tem-filas-e-muitos-brasileiros",
      "title": "Black Friday nos EUA tem filas e muitos brasileiros",
      "uuid": "8fc38d1a-9f3e-11e4-89d3-123b93f75cba",
      "xp": 100
    },
    {
      "lastComment": "guerreiro: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "slug": "semana-negativa-queda-sutil-do-ibovespa-aumenta-as-chances-de-rali-de-alta-infomoney",
      "title": "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      "uuid": "8fc38f68-9f3e-11e4-89d3-123b93f75cba",
      "xp": 145
    },
    {
      "lastComment": "comiranda: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "slug": "warren-buffett-faz-doacao-para-apoiar-hillary-clinton",
      "title": "Warren Buffett faz doação para apoiar Hillary Clinton",
      "uuid": "8fc3930a-9f3e-11e4-89d3-123b93f75cba",
      "xp": 250
    },
    {
      "lastComment": "rebatti: Duis aute irure dolor in reprehenderit in voluptate velit.",
      "slug": "brasil-cresce-so-01-com-gastos-publicos",
      "title": "Brasil cresce só 0,1% com gastos públicos",
      "uuid": "8fc3944a-9f3e-11e4-89d3-123b93f75cba",
      "xp": 130
    },
    {
      "lastComment": "Ana: Lorem ipsum",
      "slug": "semana-teve-rumores-sobre-eike-e-tombo-gigantesco-da-oi",
      "title": "Semana teve rumores sobre Eike e tombo gigantesco da Oi",
      "uuid": "c4397bea-9f3e-11e4-89d3-123b93f75cba",
      "xp": 50
    }
  ];

  function start() {
    events.emit('stream:started');
  }

  function stop() {
    events.emit('stream:stopped');
  }

  function startExampleStream() {
    let news;
    let interval;

    interval = setInterval(function() {
      let news = newsInDatabase.shift();

      if (news) {
        events.emit('news:added', news);
        return;
      }

      clearInterval(interval);

    }, 100);
  }

  function create(data) {
    return new Promise(function createPromise(resolve, reject) {
      events.emit(data.type + ':created', data.data);
      resolve(data.data);
    });
  }

  function find(query) {
    let where = query.where;

    return new Promise(function findPromise(resolve, reject) {

      if (!query) {
        resolve(newsInDatabase);
        return;
      }

      let news = _.find(newsInDatabase, where);

      resolve(news);

    });
  }

  function update(query) {

    return new Promise(function updatePromise(resolve, reject) {

      resolve(query.data);

    });
  }

  function remove(query) {

    return new Promise(function removePromise(resolve, reject) {

      resolve(query.data);

    });
  }

  return Object.freeze({
    start: start,
    stop: stop,
    create: create,
    events: events,
    find: find,
    update: update,
    remove: remove
  });

}

module.exports = createStreamMockRepository;
