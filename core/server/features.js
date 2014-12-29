'use strict';

var configurations = require('../configurations/index.js');
var _ = require('lodash');
var requireDirectory = require('require-directory');

function createFeatures() {

  function getRouters() {
    var routersArray = [];

    _.toArray(findRouteFiles())
      .forEach(function(featureObject) {
        var routerFunction = getRouterFunction(featureObject);
        routersArray.push(routerFunction);
      });

    return routersArray;
  }

  function findRouteFiles() {
    var onlyRoutesFileRegex = /routes.js$/;
    var allRouteFilesObject = requireDirectory(module, {
        include: onlyRoutesFileRegex
    });

    return allRouteFilesObject;
  }

  function getRouterFunction(featureObject) {
    return getFirstValueInObject(featureObject).routes;
  }

  function getFirstValueInObject(object) {
    return object[Object.keys(object)[0]];
  }

  return Object.freeze({
    getRouters: getRouters
  });
}

module.exports = createFeatures;
