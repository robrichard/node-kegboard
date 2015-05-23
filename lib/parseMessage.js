/**
 * Created by rob on 5/23/15.
 */

'use strict';

var messageDefinitions = require('./messageDefinitions');
var findWhere = require('lodash.findwhere');
var getTagValue = require('./getTagValue');

module.exports = function (data) {
    var buf = new Buffer(data, 'binary');
    var prefix = buf.toString('ascii', 0, 8);
    var messageId = buf.toString('hex',8, 10);
    var length = buf.readInt16LE(10);
    var payload = new Buffer(buf.slice(12, 12 + length));
    return parseTags(messageId, payload);
};

function parseTags(messageId, payload) {
    var messageDef = findWhere(messageDefinitions, {id: messageId});
    var tags = {};
    if (messageDef) {
        forEachTag(payload, function (tagId, tagMessage) {
            var tagDef = findWhere(messageDef.tags, {id: tagId});
            if (tagDef) {
                tags[tagDef.name] = getTagValue(tagDef.type, tagMessage);
            }
        });
        return {
            type: messageDef.type,
            tags: tags
        }
    }
}

function forEachTag(payload, fn) {
    var i = 0;
    var len = payload.length;
    var tagId;
    var tagLength;
    var tagMessage;
    while (i < len) {
        tagId = payload.toString('hex', i, i + 1);
        i++;
        tagLength = payload.readUInt8(i);
        i++;
        tagMessage = payload.slice(i, i + tagLength);
        i += tagLength;
        fn(tagId, tagMessage);
    }
}