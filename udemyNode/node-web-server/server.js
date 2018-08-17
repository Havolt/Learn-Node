const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
   // res.send('<h1>Hello Express</h1>');
   res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my awesome website!',
    currentYear: new Date().getFullYear()
});
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
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