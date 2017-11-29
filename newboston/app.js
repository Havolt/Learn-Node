const http = require('http');
const movies = require('./movies');
require('./emily');
require('./bucky');

http.createServer(function(req, res){
  /*
  movies.printAvatar();
  console.log(movies.favMovie);
  */



}).listen(8888);
