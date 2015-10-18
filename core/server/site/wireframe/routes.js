'use strict';

let express = require('express');
let router = express.Router();
let controllers = require('./controllers/index.js');

router.get('/*', controllers.mainPage);

module.exports = router;
