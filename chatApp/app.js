var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = 3000;

app.use(express.static(__dirname + '/public'));

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('message', (data) => {
      console.log(data);
      socket.emit('message', data);
  })
});