'use strict';

angular.module('in.newsFeed').factory('createNewsFeed', function createNewsFeedFactory($q) {

  function createNewsFeed() {

    var newsList = [
      {
        title: "Warren Buffett faz doação para apoiar Hillary Clinton",
        lastComment: "comiranda: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        xp: 250,
        slug: "warren-buffett-faz-doacao-para-apoiar-hillary-clinton"
      },
      {
        title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
        lastComment: "guerreiro: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        xp: 145,
        slug: "semana-negativa-queda-sutil-do-ibovespa-aumenta-as-chances-de-rali-de-alta-infomoney"
      },
      {
        title: "Brasil cresce só 0,1% com gastos públicos",
        lastComment: "rebatti: Duis aute irure dolor in reprehenderit in voluptate velit.",
        xp: 130,
        slug: "brasil-cresce-so-01-com-gastos-publicos"
      },
      {
        title: "Black Friday nos EUA tem filas e muitos brasileiros",
        lastComment: "hf: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        xp: 100,
        slug: "black-friday-nos-eua-tem-filas-e-muitos-brasileiros"
      }
    ];

    function find() {

      /*jshint newcap: false */
      return new $q(function findNews(resolve, reject) {
        resolve(newsList);
      });
    }

    return Object.freeze({
      find: find
    });

  }

  return createNewsFeed;
});
