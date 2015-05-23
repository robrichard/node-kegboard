'use strict';

var partial = require('lodash.partial');
var getInt = function (method, buf) {
    return buf[method](0);
};

var getters = {
    int8:   partial(getInt, 'readInt8'),
    int16:  partial(getInt, 'readInt16LE'),
    int32:  partial(getInt, 'readInt32LE'),
    uint8:  partial(getInt, 'readUInt8'),
    uint16: partial(getInt, 'readUInt16LE'),
    uint32: partial(getInt, 'readUInt32LE'),
    string: function (buf) {
        return buf.toString('ascii').replace(/\0/g, '');
    },
    bytes: function (buf) {
        return buf.toString('hex');
    },
    output_t: function (buf) {
        var i = getInt('readUInt8', buf);
        return !!i;
    },
    temp_t: function (buf) {
        var i = getInt('readInt32', buf);
        return i * 0.000001;
    }
}

module.exports = function (type, buf) {
    return getters[type](buf);
}