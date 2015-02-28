'use strict';

var Sequelize = require('sequelize');
var database = require('../database/index.js');
var sequelize = database.sequelize;

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
});

module.exports = User;
