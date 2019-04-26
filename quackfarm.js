var WebSocket = require('ws')

function QuackFarm (server) {
  this.wss = new WebSocket.Server({ server })

  this.sockets = []
  this.wss.on('connection', (ws) => {
    this.sockets.push(ws)
    ws.send(`welcome to quackfarm! you're quacker #${this.sockets.length}`)
  })
}

QuackFarm.prototype.sendQuack = function () {
  this.sockets.forEach((ws) => {
    if (!ws) return
    ws.send('quack!')
  })
}

module.exports = QuackFarm
