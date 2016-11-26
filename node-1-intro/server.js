var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200,
        {'Content-Type': 'text/plain'});
    res.end('Hello world\n');
}).listen(process.env.PORT, process.env.IP);

// https://ps-intro-to-node-mickish.c9users.io/
// Server running at 0.0.0.0:8080
console.log('Server running at '+process.env.IP+':'+process.env.PORT);
