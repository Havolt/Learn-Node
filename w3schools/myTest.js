const http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('I can write anything here!');
  res.end();
}).listen(8080);
