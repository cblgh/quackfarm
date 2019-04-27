var WebSocket = require('ws')

function QuackFarm (server) {
  this.wss = new WebSocket.Server({ server })

  this.sockets = []
  this.wss.on('connection', (ws) => {
    ws.isAlive = true
    this.sockets.push(ws)
    ws.send(`welcome to quackfarm! you're quacker #${this.count()}`)
    ws.on('pong', () => {
      ws.isAlive = true
    })
  })

  setInterval(() => {
    this.sockets.forEach((ws) => {
      if (!ws.isAlive) {
        this.sockets.splice(this.sockets.indexOf(ws), 1)
        return ws.terminate()
      }
      ws.isAlive = false
      ws.ping(noop)
    })
  }, 1000)
}

QuackFarm.prototype.sendQuack = function () {
  this.sockets.forEach((ws) => {
    if (!ws) return
    ws.send('quack!')
  })
}

QuackFarm.prototype.count = function () {
  return this.sockets.length
}

function noop () {}
module.exports = QuackFarm
