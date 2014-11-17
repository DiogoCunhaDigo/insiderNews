var express = require('express');
var router = express.Router();

router.get('/wireframe', function(req, res) {
  res.end('teste de wireframe');
});

module.exports = router;