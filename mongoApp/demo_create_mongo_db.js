const MongoClient = require('mongodb').MongoClient;
const urlM = "mongodb://localhost:27017/mydb";

MongoClient.connect(urlM, (err, db) => {
    if (err) throw err;
    console.log('Database created!');
    db.close();
});