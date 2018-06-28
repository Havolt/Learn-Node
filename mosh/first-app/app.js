
const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/games/es'){
        res.write(JSON.stringify(['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim']));
        res.end();
    }
});

/*
server.on('connection', (socket) =>{
    console.log('New connection..');
});
*/

server.listen(3000);

console.log('Listening on Port 3000...');