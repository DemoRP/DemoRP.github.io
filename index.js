const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = process.env.PORT || 1883
const httpServer = require("http").createServer();
server.listen(port, function () {
  console.log('server started and listening on port ', port)
})
httpServer.listen(process.env.PORT || 80, () => {
  console.log("websocket server listening on port ", process.env.PORT || 80);
});
