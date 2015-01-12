'use strict';

function createNewsFeedMockRepository(spec) {

  function find() {

    return new Promise(function getNews(resolve, reject) {
      resolve([
        {
          "lastComment": "hf: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "slug": "black-friday-nos-eua-tem-filas-e-muitos-brasileiros",
          "title": "Black Friday nos EUA tem filas e muitos brasileiros",
          "xp": 100
        },
        {
          "lastComment": "guerreiro: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "slug": "semana-negativa-queda-sutil-do-ibovespa-aumenta-as-chances-de-rali-de-alta-infomoney",
          "title": "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
          "xp": 145
        },
        {
          "lastComment": "comiranda: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "slug": "warren-buffett-faz-doacao-para-apoiar-hillary-clinton",
          "title": "Warren Buffett faz doação para apoiar Hillary Clinton",
          "xp": 250
        },
        {
          "lastComment": "rebatti: Duis aute irure dolor in reprehenderit in voluptate velit.",
          "slug": "brasil-cresce-so-01-com-gastos-publicos",
          "title": "Brasil cresce só 0,1% com gastos públicos",
          "xp": 130
        },
        {
          "lastComment": "Ana: Lorem ipsum",
          "slug": "semana-teve-rumores-sobre-eike-e-tombo-gigantesco-da-oi",
          "title": "Semana teve rumores sobre Eike e tombo gigantesco da Oi",
          "xp": 50
        }
      ]);

    });

  }

  return Object.freeze({
    find: find
  });

}

module.exports = createNewsFeedMockRepository;
