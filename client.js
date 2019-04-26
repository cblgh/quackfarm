const WebSocket = require('ws')
if (process.argv.length <= 2) {
  console.log('i need a quackfarm link, give it to me!')
  process.exit(0)
}
let ws = new WebSocket(process.argv[2])

ws.on('message', console.log)

ws.on('error', function incoming (data) {
  console.log('quackfarm is having a bad time right now, try again later!')
  process.exit(0)
})
