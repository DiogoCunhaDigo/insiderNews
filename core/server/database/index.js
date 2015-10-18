'use strict';

var configurations = require('../../configurations/index.js');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('insidernews', null, null, configurations.database);
var models;

function start() {
  return new Promise(function startPromise(resolve, reject) {

    var migrations = require('./migrations.js');

    migrations
      .start()
      .then(loadModels)
      .then(sequelizeSync)
      .then(finish)
      .catch(reject);

    function loadModels() {
      models = require('../models/index.js');
    }

    function sequelizeSync() {
      sequelize
        .sync()
        .then(function syncCompleted(err) {
          if (err) {
            reject(err);
            return;
          }
        });
    }

    function finish() {
      resolve();
    }

  });
}

module.exports = {
  sequelize: sequelize,
  start: start,
  models: models
};
