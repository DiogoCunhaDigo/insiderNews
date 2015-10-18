'use strict';

let Sequelize = require('sequelize');
let database = require('../database/index.js');
let sequelize = database.sequelize;

let User = sequelize.define('user', {
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
      let News = require('./news.js');
      User.hasMany(News);
    }
  }
});

module.exports = User;
