const express = require('express');
const app = express();
const port = 3000;


//Main route for index
app.get('/', (req, res) => {
    res.send('Hello User!');
})

//Tell app to listen on port 3000
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});