const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello world');
});

server = app.listen(port, () => console.log(`Listening on port ${port}`))

const io = require('socket.io')(server);

io.on('connection', () => {
    console.log('New user connected');
})

