'use strict';

let configurations = require('../configurations/index.js');
let _ = require('lodash');
let requireDirectory = require('require-directory');

function createFeatures() {

  function getRouters() {
    let routersArray = [];

    _.toArray(findRouteFiles())
      .forEach(function(featureObject) {
        let routerFunction = getRouterFunction(featureObject);
        routersArray.push(routerFunction);
      });

    return routersArray;
  }

  function findRouteFiles() {
    let onlyRoutesFileRegex = /routes.js$/;
    let allRouteFilesObject = requireDirectory(module, {
        include: onlyRoutesFileRegex
    });

    return allRouteFilesObject;
  }

  function getRouterFunction(featureObject) {
    let firstValue = getFirstValueInObject(featureObject);
    return firstValue.routes;
  }

  function getFirstValueInObject(featureObject) {
    return featureObject[Object.keys(featureObject)[0]];
  }

  return Object.freeze({
    getRouters: getRouters
  });
}

module.exports = createFeatures;
