const connect = require('connect');
const http = require('http');

let app = connect();

/*
function doFirst(req, res, next){
    console.log('Cheese');
    next();
}
function doSecond(req, res, next){
    console.log('Burger');
    next();
}
app.use(doFirst);
app.use(doSecond);
*/

function profile(req, res){
    console.log('User requested profile'); 
}

function forum(req, res){
    console.log('User requested forum');
}

app.use('/profile', profile);
app.use('/forum', forum)

http.createServer(app).listen(8888);
console.log('Server is running');