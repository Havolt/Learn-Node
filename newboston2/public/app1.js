let http = require('http');
let fs = require('fs');

/*
function onRequest(request, response){
    
    console.log('A user made a request' + request.url);
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write("Here is some data");
    response.end();
}
*/


//404 response
function send404Response(response){
    response.writeHead(404, {"Contend-Type": "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

//Handle a user request
function onRequest(request, response){

    if( request.method == 'GET' && request.url == '/'){
        response.writeHead(200, {"Content-Type": 'text/html'});
        fs.createReadStream('public/index.html').pipe(response);
    }else{
        send404Response(response);
    }

}

http.createServer(onRequest).listen(8888);
console.log('Server is now running...');