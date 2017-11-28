const http = require('http');
const timer = require('./getMyTime.js');
const port = 8080;
const serverUrl = 'localhost';

let server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type' : 'text/html'});

  console.log('Request:' + req.url);

  let time = new Date();

  let content = '<p> Current time is: ' + time +'.</p>';


  res.write(content);
  res.end()
})

console.log("Listening at " + serverUrl + ':' + port);
server.listen(port, serverUrl);
