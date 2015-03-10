'use strict';

var Sequelize = require('sequelize');
var database = require('../database/index.js');
var sequelize = database.sequelize;

var User = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
    allowNull: false,
    validate: {
      isUUID: 4
    }
  },

  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },

  password: {
    type: Sequelize.STRING,
    validate: {
      len: [2]
    }
  },

  xp: {
    type: Sequelize.FLOAT
  },

  gold: {
    type: Sequelize.FLOAT
  }
}, {
  classMethods: {
    associate: function() {
      var News = require('./news.js');
      User.hasMany(News);
    }
  }
});

module.exports = User;
