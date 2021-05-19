const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = process.env.PORT || 1883

server.listen(port, function () {
  console.log('server started and listening on port ', port)
})
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(process.env.PORT||80);

