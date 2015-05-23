'use strict';

var Kegboard = require('./lib/Kegboard');
var board = new Kegboard({
    port: process.argv[2]
});

board.on('hello', function (data) {
    console.log('hello');
    console.log(JSON.stringify(data, null, 2));
});
