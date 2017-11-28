const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res){
  res.send('<h1>Hello World</h1>');
})

app.listen(8080);
console.log('Server is running on port 8080');
