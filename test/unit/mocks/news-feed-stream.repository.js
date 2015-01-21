'use strict';
var EventEmitter = require('events').EventEmitter;

function createNewsFeedStreamMockRepository(spec) {
  spec = spec || {};
  var events = new EventEmitter();
  var newsQueue = [
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
    var news;
    var interval;

    interval = setInterval(function() {
      var news = newsQueue.shift();

      if (news) {
        events.emit('news:added', news);
        return;
      }

      clearInterval(interval);

    }, 100);
  }

  return Object.freeze({
    start: start,
    stop: stop,
    events: events
  });

}

module.exports = createNewsFeedStreamMockRepository;
