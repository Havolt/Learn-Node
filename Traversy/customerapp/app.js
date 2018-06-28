const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();

/*
    let logger = function(req, res, next){
        console.log('Logging...');
        next();
    };

    app.use(logger);
*/

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

/*
let people = [
    {name: 'Jeff',age: 30},
    {name: 'Nero', age: 40},
    {name: 'Dante',age: 50}
];
*/

let users = [
    {id: 1, firstname: 'Dave', lastname: 'Brown', email: 'db@gmail.com'},
    {id: 1, firstname: 'Peter', lastname: 'Griffin', email: 'familyguy@gmail.com'},
    {id: 1, firstname: 'Jack', lastname: 'Smith', email: 'mainmain@gmail.com'}
];

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.listen(3000, () =>{
    console.log('Server started on port 3000...');
});