const port = process.env.PORT || 80;
const aedes = require('aedes')()
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
ws.createServer({ server: httpServer }, aedes.handle)
httpServer.listen(port, function () {
  console.log('websocket server listening on port ', port)
})
