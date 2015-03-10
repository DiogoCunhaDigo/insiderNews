'use strict';

function start() {
  return new Promise(function startPromise(resolve, reject) {
    var User = require('../models/user.js');
    var News = require('../models/news.js');

    User.associate();
    News.associate();

    resolve();
  });
}

module.exports = {
  start: start
};
