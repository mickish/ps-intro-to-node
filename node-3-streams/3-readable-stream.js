/*
 * Read from a request as an event stream
 */

var request = require('request');

var s = request('http://www.pluralsight.com/');
var c = 0;

s.on('data', function(chunk) {
    c++;
    console.log(">>>Data>>> " + chunk);
});

s.on('end', function() {
    console.log(">>>Done!>>> after " + c + " data events");
})