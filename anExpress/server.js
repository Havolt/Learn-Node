const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


//Main route for index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/test', (req, res) => {
    res.send('This is test');
})

//Tell app to listen on port 3000
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});