var os = require('os');
var fs = require('fs');

var toMb = function(f) {
    return (Math.round((f/1024/1024)*100)/100);
}

console.log('Host: ' + os.hostname());
console.log('load average: ' + os.loadavg());
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + ' Mb free');

var filename = '/etc/passwd';
fs.readFile(filename, (err, data) => {
  if (err) throw err;
  console.log(filename + ":\n" + data);
});
