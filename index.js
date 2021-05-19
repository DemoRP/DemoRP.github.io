
const aedes = require("aedes")();
const ws = require("websocket-stream");
const port = process.env.PORT || 80;
ws.createServer({ server: httpServer }, aedes.handle);
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(port);
