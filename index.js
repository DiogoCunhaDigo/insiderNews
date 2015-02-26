'use strict';

require('native-promise-only');
var createCore = require('./core/index.js');
var core = createCore();

core
  .start()
  .then(serverStartSuccess)
  .catch(serverStartFail);


function serverStartSuccess(server) {
  console.log('Servidor iniciado no endereço: %s:%s', server.host, server.port);
}

function serverStartFail(err) {
  console.log('Erro ao iniciar servidor:');
  console.log(err);
}
