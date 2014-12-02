'use strict';

var controllers = {};

controllers.mainPage = function(req, res) {

  var news = [
    {
      title: "Via Varejo vende Casa Bahia Contact Center para Atento",
      lastComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      xp: 250
    },
    {
      title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      lastComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      xp: 145
    },
    {
      title: "Brasil cresce só 0,1% com gastos públicos",
      lastComment: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      xp: 130
    },
    {
      title: "Black Friday nos EUA tem filas e muitos brasileiros",
      lastComment: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      xp: 100
    },
    {
      title: "Via Varejo vende Casa Bahia Contact Center para Atento",
      lastComment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      xp: 93
    },
    {
      title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      lastComment: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      xp: 80
    },
    {
      title: "Brasil cresce só 0,1% com gastos públicos",
      lastComment: "Neque porro quisquam est.",
      xp: 75
    },
    {
      title: "Black Friday nos EUA tem filas e muitos brasileiros",
      lastComment: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
      xp: 74
    },
    {
      title: "Via Varejo vende Casa Bahia Contact Center para Atento",
      lastComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      xp: 67
    },
    {
      title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      lastComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      xp: 60
    },
    {
      title: "Brasil cresce só 0,1% com gastos públicos",
      lastComment: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      xp: 43
    },
    {
      title: "Black Friday nos EUA tem filas e muitos brasileiros",
      lastComment: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      xp: 20
    },
    {
      title: "Via Varejo vende Casa Bahia Contact Center para Atento",
      lastComment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      xp: 15
    },
    {
      title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      lastComment: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      xp: 13
    },
    {
      title: "Brasil cresce só 0,1% com gastos públicos",
      lastComment: "Neque porro quisquam est.",
      xp: 5
    },
    {
      title: "Black Friday nos EUA tem filas e muitos brasileiros",
      lastComment: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
      xp: 1
    }
  ];

  res.render('wireframe/views/main-page.html', {
    title: 'insiderNews - Wireframe',
    news: news
  });
};

module.exports = controllers;
