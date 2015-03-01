'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('insidernews', null, null, {
  dialect: 'sqlite'
});
var migrations = require('./migrations.js');
var associations = require('./associations.js');

function start() {
  return new Promise(function startPromise(resolve, reject) {

    migrations
      .start()
      .then(associationsStart)
      .then(sequelizeSync)
      .then(finish);

    function associationsStart() {
      return associations.start();
    }

    function sequelizeSync() {
      return sequelize.sync();
    }

    function finish() {
      resolve();
    }

  });
}

module.exports = {
  sequelize: sequelize,
  start: start
};
