/**
 * Created by rob on 5/23/15.
 */

'use strict';
var EventEmitter = require('events').EventEmitter;
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var parseMessage = require('./parseMessage');

//function showPortOpen() {
//    console.log('port open. Data rate: ' + myPort.options.baudRate);
//}
//

//function showPortClose() {
//    console.log('port closed.');
//}
//
//function showError(error) {
//    console.log('Serial port error: ' + error);
//}

var Kegboard = function (options) {
    this.port = new SerialPort(options.port, {
        baudRate: 9600,
        parser: serialport.parsers.readline('\r\n', 'binary')
    });
    //this.port.on('open', showPortOpen);
    this.port.on('data', function (data) {
        var message = parseMessage(data);
        this.emit(message.type, message.tags);
    }.bind(this));
    //this.port.on('close', showPortClose);
    //this.port.on('error', showError);
};

Kegboard.prototype = Object.create(EventEmitter.prototype);

module.exports = Kegboard;


