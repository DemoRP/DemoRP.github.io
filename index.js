
const aedes = require("aedes")();
const httpServer = require("http").createServer();
const ws = require("websocket-stream");
const port = process.env.PORT || 80;

ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(port, () => {
  console.log("websocket server listening on port ", port);
});
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(process.env.PORT ||8080);
