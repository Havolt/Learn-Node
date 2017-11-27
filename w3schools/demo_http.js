const http = require('http');

//create a server object:
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url); //Write a response to the client
  res.end();//End the response
}).listen(8080) // Server object listens on port 8080
