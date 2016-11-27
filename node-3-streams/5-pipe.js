var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

var s = request('http://www.pluralsight.com/');

s.pipe(process.stdout);

s.pipe(fs.createWriteStream('/tmp/pluralsight.html'));

s.pipe(zlib.createGzip()).pipe(fs.createWriteStream('/tmp/pluralsight.gzip'));

console.log("Done");