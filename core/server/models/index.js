'use strict';

let models = {};

let User = require('./user.js');
let News = require('./news.js');

User.associate();
News.associate();

models[User.name] = User;
models[News.name] = News;

module.exports = models;
