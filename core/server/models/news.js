'use strict';

var Sequelize = require('sequelize');
var database = require('../database/index.js');
var sequelize = database.sequelize;

var News = sequelize.define('news', {
  title: {
    type: Sequelize.STRING
  }
});

module.exports = News;
