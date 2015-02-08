'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('test.bmp');
var bitmapObject = {};

bitmapObject.paletteSize = bitmap.readUInt32LE(46);

function BitmapChanger(buff) {
  var HEADER_SIZE = 54; // bytes
  this.invert = function () {
    for (var i = HEADER_SIZE; i < HEADER_SIZE+bitmapObject.paletteSize; i++) {
      buffer[i] = 255 - buffer[i];
    }
  };
  this.toBuffer = function () {
    return buffer;
  }
};

var buffer = new Buffer(bitmap);

var bmpChanger = new BitmapChanger(buffer);
bmpChanger.invert();

fs.writeFile('output.bmp', buffer);