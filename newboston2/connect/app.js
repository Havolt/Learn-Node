let connect = require('connect');
let http = require('http');

let app = connect();

/*
app.use(doFirst);
app.use(doSecond);

function doFirst(request, response, next){
    console.log('Gloom');
    next();
}

function doSecond(request, response, next){
    console.log('Vileplum');
    next();
}
*/

function profile(request, response){
    console.log('user requested profile');
}

function forum(request, response){
    console.log('user requested forum');
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);

console.log('sever is running..')