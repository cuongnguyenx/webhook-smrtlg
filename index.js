'use strict';
var express  = require('express'),
    bodyParser   = require('body-parser'),
    http         = require('http'),
    config       = require('./Config'),
    app          = express(),
    mongoose     = require('mongoose');

// mongoose instance connection url connection
//mongoose.Promise= global.Promise();
//mongoose.connect(config.dbUrl,{ useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./API/Routes/Router'); //importing route
routes(app); //register the route
app.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});