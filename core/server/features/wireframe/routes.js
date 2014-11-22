var express = require('express');
var router = express.Router();
var controllers = require('./controllers/index.js');

router.get('/', controllers.mainPage);

module.exports = router;