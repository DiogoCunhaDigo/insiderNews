'use strict';

var Sequelize = require('sequelize');
var database = require('../database/index.js');
var sequelize = database.sequelize;

var News = sequelize.define('news', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  }
}, {
  classMethods: {
    associate: function() {
      var User = require('./user.js');
      News.belongsTo(User);
    }
  }
});

module.exports = News;
