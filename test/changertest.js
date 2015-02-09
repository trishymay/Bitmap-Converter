'use strict';

var expect = require('chai').expect;
var reader = require('../lib/changer');
var HEADER_SIZE = 54;
var paletteSize = 32;

var startingBmp = new Buffer(HEADER_SIZE + paletteSize);
var bmpChange = new reader(startingBmp)
var makeStartingBmp = function() {
  for (var i = HEADER_SIZE; i < startingBmp.length; i++) {
    startingBmp[i] = 255;
  };
};
makeStartingBmp();

var invertedBmp = new Buffer(HEADER_SIZE + paletteSize);
var bmpChange1 = new reader(invertedBmp)
var makeInvertedBmp = function() {
  for (var i = HEADER_SIZE; i < invertedBmp.length; i++) {
    invertedBmp[i] = 0;
  };
};
makeInvertedBmp();

// var shadowBmp = new Buffer(HEADER_SIZE + paletteSize);
// var makeShadowBmp = function() {
//   for (var i = HEADER_SIZE; i < shadowBmp.length; i++) {
//     shadowBmp[i] = 255/2;
//   };
// };
// makeShadowBmp();

describe('invert', function() {
  it('should change all pallette values to 0', function() {
    expect(bmpChange.invert(startingBmp)).to.eql(invertedBmp);
  });
});
// describe('shadow', function() {
//   it('should reduce all palette values by half', function() {
//     expect(changer.invert(startingBmp)).to.eql(shadowBmp);
//   });
// });
