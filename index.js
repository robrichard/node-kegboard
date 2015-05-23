'use strict';

var Kegboard = require('./lib/Kegboard');
var board = new Kegboard({
    port: process.argv[2]
});

board.on('hello', function (data) {
    console.log('hello', JSON.stringify(data, null, 2));
});

board.on('meter_status', function (data) {
    console.log('meter_status', JSON.stringify(data, null, 2));
});

board.on('error', function (err) {
    console.log('error reading from kegboard', err);
});