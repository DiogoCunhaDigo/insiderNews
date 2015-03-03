'use strict';

var _ = require('lodash');

var environment = process.env.NODE_ENV || 'develop';
var baseConfigurations = require('./base.js');
var environmentConfigurations = require('./' + environment + '.js');
var userConfigurations = require('../../content/configurations.js');
var mergedConfigurations;

mergedConfigurations = _.merge(baseConfigurations, environmentConfigurations, userConfigurations);

module.exports = mergedConfigurations;
