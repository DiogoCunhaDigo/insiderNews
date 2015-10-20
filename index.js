'use strict';

require('native-promise-only');
var Core = require('./core/index.js');
var core = new Core();

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
  console.log(err.stack);
}
