const http = require('http');

function onRequest(req, res){
  console.log("User made request " + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Here is your data");
  res.end();
}

http.createServer(onRequest).listen(8888);
console.log('Server is now running');
