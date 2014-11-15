var configurations = require('../../configurations/index.js');
var _ = require('lodash');
var requireDirectory = require('require-directory');

function createFeatures() {
  
  function getRouters() {
    var routersArray = [];

    _.toArray(featuresRoutersObject())
      .forEach(function(routerObject) {
        var routerFunction = routerObject.routes;
        routersArray.push(routerFunction);
      })
      
    return routersArray;
  }
  
  function featuresRoutersObject() {
    var onlyRoutesFileRegex = /routes.js$/;
    
    return requireDirectory(module, {
        include: onlyRoutesFileRegex
    });
  }

  return Object.freeze({
    getRouters: getRouters
  })
}

module.exports = createFeatures;
