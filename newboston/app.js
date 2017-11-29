const http = require('http');

http.createServer(function(req, res){

  function addNumber(a, b){
    return a + b;
  }

  console.log(addNumber(10, 20));

}).listen(8888);
