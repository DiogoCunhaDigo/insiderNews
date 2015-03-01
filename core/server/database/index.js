'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('insidernews', null, null, {
  dialect: 'sqlite'
});

function start() {
  return new Promise(function startPromise(resolve, reject) {

    var migrations = require('./migrations.js');
    var associations = require('./associations.js');

    migrations
      .start()
      .then(associationsStart)
      .then(sequelizeSync)
      .then(finish)
      .catch(reject);

    function associationsStart() {
      return associations.start();
    }

    function sequelizeSync() {
      sequelize
        .sync()
        .complete(function syncCompleted(err) {
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
  start: start
};
