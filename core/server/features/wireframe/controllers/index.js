'use strict';

var controllers = {};

controllers.mainPage = function(req, res) {

  var news = [
    {
      title: "Via Varejo vende Casa Bahia Contact Center para Atento",
      lastComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."
    },
    {
      title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      lastComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..."
    },
    {
      title: "Brasil cresce só 0,1% com gastos públicos",
      lastComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum..."
    },
    {
      title: "Black Friday nos EUA tem filas e muitos brasileiros",
      lastComment: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui..."
    },
    {
      title: "Via Varejo vende Casa Bahia Contact Center para Atento",
      lastComment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem..."
    },
    {
      title: "Semana negativa? Queda sutil do Ibovespa aumenta as chances de rali de alta - InfoMoney",
      lastComment: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut..."
    },
    {
      title: "Brasil cresce só 0,1% com gastos públicos",
      lastComment: "Neque porro quisquam est."
    },
    {
      title: "Black Friday nos EUA tem filas e muitos brasileiros",
      lastComment: "Quis autem vel eum iure reprehenderit qui."
    }
  ];

  res.render('wireframe/views/main-page.html', {
    title: 'insiderNews - Wireframe',
    news: news
  });
};

module.exports = controllers;
