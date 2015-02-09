'use strict';

var fs = require('fs');
var reader = require('./lib/changer');
var bitmap = fs.readFileSync(process.argv[2]);

var buffer = new Buffer(bitmap);
var buffer1 = new Buffer(bitmap);
var buffer2 = new Buffer(bitmap);

var bmpChange = new reader(buffer);
bmpChange.invert();
bmpChange.toBuffer();
fs.writeFile('./images/inverted.bmp', bmpChange.toBuffer());

bmpChange = new reader(buffer1);
bmpChange.shadow();
bmpChange.toBuffer();
fs.writeFile('./images/shadowed.bmp', bmpChange.toBuffer());

bmpChange = new reader(buffer2);
bmpChange.invert();
bmpChange.shadow();
bmpChange.toBuffer();
fs.writeFile('./images/allChanges.bmp', bmpChange.toBuffer());

