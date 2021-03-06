const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');


app.use((req, res, next) => {
    const now = new Date().toString();
    const log = `${now}: ${req.method} ${req.url}`

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

app.use(express.static(__dirname + '/public'));

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
   // res.send('<h1>Hello Express</h1>');
   res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my awesome website!'
});
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to get requested page.'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});