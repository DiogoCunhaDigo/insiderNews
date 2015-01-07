'use strict';

angular.module('in.newsHome', [
  'ui.router'
]);

angular.module('in.newsHome').config(configureNewsHomeModule);


function configureNewsHomeModule($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('newsHome', {
      url: '/',
      views: {
        'main': {
          templateUrl: 'site/news-home/templates/index.html'
        },
        'newsFeed@newsHome': {
          templateUrl: 'site/news-feed/templates/index.html',
          controller: 'NewsFeedCtrl as newsFeed'
        },
        'newsDetail@newsHome': {
          templateUrl: 'site/news-home/templates/introduction.html'
        }
      }
    })
    .state('newsHome.detail', {
      url: 'noticias/',
      views: {
        'newsDetail@newsHome': {
          templateUrl: 'site/news-detail/templates/index.html'
        }
      }
    });
}


angular.module('in.newsHome').controller('NewsFeedCtrl', function WIPnewsFeedCtrl() {
  var newsFeed = this;

  newsFeed.news = [
    {
      title: "Warren Buffett faz doação para apoiar Hillary Clinton",
      lastComment: "comiranda: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      xp: 250
    },
    {
      title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      lastComment: "guerreiro: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      xp: 145
    },
    {
      title: "Brasil cresce só 0,1% com gastos públicos",
      lastComment: "rebatti: Duis aute irure dolor in reprehenderit in voluptate velit.",
      xp: 130
    },
    {
      title: "Black Friday nos EUA tem filas e muitos brasileiros",
      lastComment: "hf: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      xp: 100
    },
    {
      title: "Via Varejo vende Casa Bahia Contact Center para Atento",
      lastComment: "Tracker: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      xp: 93
    },
    {
      title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      lastComment: "neucrates: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      xp: 80
    },
    {
      title: "Brasil cresce só 0,1% com gastos públicos",
      lastComment: "bacanacesar: Neque porro quisquam est.",
      xp: 75
    },
    {
      title: "Black Friday nos EUA tem filas e muitos brasileiros",
      lastComment: "ferpa: Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
      xp: 74
    },
    {
      title: "Via Varejo vende Casa Bahia Contact Center para Atento",
      lastComment: "oMinerim: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      xp: 67
    },
    {
      title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      lastComment: "Ana: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      xp: 60
    },
    {
      title: "Brasil cresce só 0,1% com gastos públicos",
      lastComment: "paulo: Duis aute irure dolor in reprehenderit in voluptate velit.",
      xp: 43
    },
    {
      title: "Black Friday nos EUA tem filas e muitos brasileiros",
      lastComment: "godinha: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      xp: 20
    },
    {
      title: "Via Varejo vende Casa Bahia Contact Center para Atento",
      lastComment: "FilipeDeschamps: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      xp: 15
    },
    {
      title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      lastComment: "maldosocesar: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      xp: 13
    },
    {
      title: "Brasil cresce só 0,1% com gastos públicos",
      lastComment: "Spock: Neque porro quisquam est.",
      xp: 5
    },
    {
      title: "Black Friday nos EUA tem filas e muitos brasileiros",
      lastComment: "Rafaelfm: Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
      xp: 1
    }
  ];
});
