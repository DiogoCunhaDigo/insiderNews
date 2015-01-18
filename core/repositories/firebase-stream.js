'use strict';

var defaultResource = require('browser-request');

function createFirebaseStreamRepository(spec) {
  spec = spec || {};
  var resource = spec.resource || defaultResource;

  if ( !resource ) {
    throw new Error('You need to specify a resource property: "createRepository({resource: resource})"');
  }

  function start() {

  }

  return Object.freeze({
    start: start
  });

}

module.exports = createFirebaseStreamRepository;
