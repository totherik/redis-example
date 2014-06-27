'use strict';

var express = require('express');
var kraken = require('kraken-js');

var app, server;

app = express();
app.use(kraken());
app.on('start', function () {
    console.log('Application ready to serve requests.');
});

server = app.listen(8000);
server.on('listening', function () {
    console.log('Server is listening on port', server.address().port);
});