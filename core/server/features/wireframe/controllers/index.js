'use strict';

var controllers = {};

controllers.mainPage = function(req, res) {
    res.render('wireframe/views/main-page.html', {
        title: 'insiderNews - Wireframe'
    });
};

module.exports = controllers;
