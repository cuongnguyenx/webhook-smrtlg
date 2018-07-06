'use strict';
var express = require('express');
module.exports = function(app) {
    var apiRoutes =  express.Router([]);
    var WebController = require('../Controller/WebController');
    app.get('/',function(req,res){
        res.send('We are happy to see you using Chat Bot Webhook');
    });
// registerUser Route
    app.route('/')
        .post(WebController.processRequest);
};