/**
 * Created by rob on 5/23/15.
 */

'use strict';
var EventEmitter = require('events').EventEmitter;
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var parseMessage = require('./parseMessage');

var Kegboard = function (options) {
    this.port = new SerialPort(options.port, {
        baudRate: 9600,
        parser: serialport.parsers.readline('\r\n', 'binary')
    });
    this.port.on('open', function () {
        this.emit('open');
    }.bind(this));
    this.port.on('close', function () {
        this.emit('close');
    }.bind(this));
    this.port.on('error', function (e) {
        this.emit('error', e);
    }.bind(this));
    this.port.on('data', function (data) {
        var message;
        try {
            message = parseMessage(data);
        } catch (e) {
            this.emit('error', e);
            return;
        }
        this.emit(message.type, message.tags);
    }.bind(this));
};

Kegboard.prototype = Object.create(EventEmitter.prototype);

module.exports = Kegboard;
