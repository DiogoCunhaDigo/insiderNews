'use strict';

let controllers = {};

controllers.mainPage = function(req, res) {

  let news = [
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

  let messages = [
    {
      userName: "comiranda",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createdAt: "1 hora atrás",
    },
    {
      userName: "guerreiro",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      createdAt: "há 1 minuto atrás",
    },
    {
      userName: "rebatti",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createdAt: "poucos segundos atrás",
    },
    {
      userName: "hf",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      createdAt: "neste exato momento",
    },
    {
      userName: "Tracker",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.",
      createdAt: "neste exato momento",
    },
    {
      userName: "neucrates",
      content: "Et harum quidem rerum",
      createdAt: "neste exato momento",
    },
    {
      userName: "bacanacesar",
      content: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis.",
      createdAt: "neste exato momento",
    },
    {
      userName: "ferpa",
      content: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      createdAt: "neste exato momento",
    },
    {
      userName: "oMinerim",
      content: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      createdAt: "neste exato momento",
    },
  ];


  res.render('site/wireframe/templates/home.html', {
    title: 'insiderNews - Wireframe',
    news: news,
    messages: messages
  });
};

module.exports = controllers;
