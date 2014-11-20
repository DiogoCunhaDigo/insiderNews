var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('wireframe/views/index');
});

module.exports = router;