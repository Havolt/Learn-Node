const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');

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

//Global Vars
app.use((req,res,next)=>{
    res.locals.errors = null;
    next();
})

// express validator middleware
app.use(expressValidator()); 

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

app.post('/users/add', function(req, res){

    req.checkBody('firstname', 'Firstname is required').notEmpty();
    req.checkBody('lastname', 'Lastname is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();

    let errors = req.validationErrors();

    if(errors){
        console.log('ERRORS');
        res.render('index', {
            title: 'Customers',
            users: users,
            errors: errors
        });
    }else{
        let newUser = {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email
        }
        console.log('SUCCESS');
    }

})

app.listen(3000, () =>{
    console.log('Server started on port 3000...');
});