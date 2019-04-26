var QuackFarm = require('./quackfarm')
var express = require('express')
var app = express()
const port = 8888

var server = app.listen(port, function () {
  console.log(`http listening on ${port}`)
})

var farm = new QuackFarm(server)

app.get('/', function (req, res) {
  res.send('welcome to quackfarm\nsend a POST to /quack')
})

app.post('/quack', function (req, res) {
  farm.sendQuack()
  res.sendStatus(200)
})
