'use strict';

let _ = require('lodash');

let environment = process.env.NODE_ENV || 'develop';
let baseConfigurations = require('./base.js');
let environmentConfigurations = require('./' + environment + '.js');
let userConfigurations = require('../../content/configurations.js');
let mergedConfigurations;

mergedConfigurations = _.merge(baseConfigurations, environmentConfigurations, userConfigurations);

module.exports = mergedConfigurations;
