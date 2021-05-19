
const aedes = require("aedes")();
const httpServer = require("http").createServer();
const ws = require("websocket-stream");
const port = process.env.PORT || 80;

ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(port, () => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});
