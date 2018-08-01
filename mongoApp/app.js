const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const urlM = "mongodb://localhost:27017/";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req, res) => {
    console.log('stop calling me')
    console.log(req.body.favGame);
    res.send({test: 'working'});
});

app.post('/send', (req, res) => {
    let mongoSuccess = false;
    MongoClient.connect(urlM, (err, db) => {
        if (err) {
            res.json({message: 'Something went wrong'});
            throw err;
        };
        var dbo = db.db("mydb");
        dbo.collection("customers").insertOne(req.body, () => {
            if (err) {
                res.json({message: 'Something went wrong'});
                throw err
            };
            console.log('User document inserted');
            db.close();
            mongoSuccess = true;
            if(mongoSuccess){
                res.json({message: 'Success'});
            }
        })
    });

    

});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);  
});

