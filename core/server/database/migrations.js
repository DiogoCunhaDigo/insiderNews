'use strict';

var Sequelize = require('sequelize');
var database = require('../database/index.js');
var sequelize = database.sequelize;
var configurations = require('../../configurations/index.js');

var Umzug = require('umzug');
var umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelize
  },
  migrations: {
      // The params that gets passed to the migrations.
      // Might be an array or a synchronous function which returns an array.
      params: [sequelize.getQueryInterface(), Sequelize],
      path: configurations.paths.migrations,
      pattern: /^\d+[\w-]+\.js$/
  }
});

function start() {
  return new Promise(function startPromise(resolve, reject) {

    umzug
      .pending()
      .then(function (migrations) {
        console.log(migrations);
      })
      .then(finish)
      .catch(reject);

    function finish() {
      resolve();
    }
  });
}

module.exports = {
  start: start
};
