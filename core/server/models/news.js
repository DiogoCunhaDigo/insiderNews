'use strict';

let Sequelize = require('sequelize');
let database = require('../database/index.js');
let sequelize = database.sequelize;

let News = sequelize.define('news', {
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
    associate: function associateNews() {
      let User = require('./user.js');
      News.belongsTo(User);
    }
  }
});

module.exports = News;
