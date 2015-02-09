'use strict';

module.exports = function (buff) {
  var HEADER_SIZE = 54; // bytes
  var paletteSize = buff.readUInt32LE(46);
  var newBuff = buff;
  this.invert = function () {
    for (var i = HEADER_SIZE; i < HEADER_SIZE + paletteSize; i++) {
      newBuff[i] = 255 - newBuff[i];
    };
  };
  this.shadow = function () {
    for (var j = HEADER_SIZE; j < HEADER_SIZE + paletteSize; j++) {
      newBuff[j] = newBuff[j]/2;
    };
  };
  this.toBuffer = function() {
    return newBuff;
  };
};