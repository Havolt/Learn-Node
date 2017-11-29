const http = require('http');
const movies = require('./movies')

http.createServer(function(req, res){

  movies.avatar();

}).listen(8888);
