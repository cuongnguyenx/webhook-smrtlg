'use strict';
var express  = require('express'),
    bodyParser   = require('body-parser'),
    http         = require('http'),
    app          = express(),
    config = require('./config'),
    mongoose = require('mongoose'),
    uploadText = require('./API/Model/uploadText');
// mongoose instance connection url connection
mongoose.Promise = Promise;
mongoose.connect(config.dbUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error : '));
db.once('open', function () {
    console.log('Connection ok!');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./API/Routes/Router'); //importing route
routes(app); //register the route
app.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});