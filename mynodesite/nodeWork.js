const http = require('http');
const timer = require('./getMyTime.js');

http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write('Current time is: ' + timer.getMyTime());
  res.end()
}).listen(8080);
