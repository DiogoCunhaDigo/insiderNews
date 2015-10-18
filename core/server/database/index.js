'use strict';

let configurations = require('../../configurations/index.js');
let Sequelize = require('sequelize');
let sequelize = new Sequelize('insidernews', null, null, configurations.database);
let models;

function start() {
  return new Promise(function startPromise(resolve, reject) {

    let migrations = require('./migrations.js');

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
