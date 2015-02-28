'use strict';

function start() {
  return new Promise(function startPromise(resolve, reject) {
    var User = require('../models/user.js');
    var News = require('../models/news.js');

    User.hasMany(News);
    News.belongsTo(User);

    resolve();
  });
}

module.exports = {
  start: start
};
