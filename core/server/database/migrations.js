'use strict';

function start() {
  return new Promise(function startPromise(resolve, reject) {
    resolve();
  });
}

module.exports = {
  start: start
};
