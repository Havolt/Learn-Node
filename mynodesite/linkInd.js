const http = require('http');
const fs = require('fs');
const port = 8080;
const serverUrl = 'localhost';

let server = http.createServer(function(req, res){

  fs.readFile("index.html", function(err, text){
    res.setHeader("Content-Type", "text/html");
    res.end(text);
  })
})

server.listen(port, serverUrl);
