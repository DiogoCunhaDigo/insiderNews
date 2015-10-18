'use strict';

let Sequelize = require('sequelize');
let database = require('../database/index.js');
let sequelize = database.sequelize;
let configurations = require('../../configurations/index.js');

let Umzug = require('umzug');
let umzug = new Umzug({
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
      .up()
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
