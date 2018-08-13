console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var res = notes.addNote();
// console.log(res);


console.log('Result:', notes.add(10, 55));

// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username} and you are ${notes.age}!`, (err) => {
//     if(err) {console.log('An error has occured')}
// });