'use strict';

var models = {};

var User = require('./user.js');
var News = require('./news.js');

User.associate();
News.associate();

models[User.name] = User;
models[News.name] = News;

module.exports = models;
