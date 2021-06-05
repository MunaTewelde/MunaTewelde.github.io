var http = require('http');
var port;
http.createServer(function (req, res) {
    res.writeHead(200,
        { 'Content-Type': 'text/html' });
    res.end(req.url);
}).listen(8080);
port = 8080;

console.log("i am listning at port" + port)