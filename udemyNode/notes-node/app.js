console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// var res = notes.addNote();
// console.log(res);

//Removes duplicates from array
console.log(_.uniq(['Mark',2,5,2,5,10,2,5,10,20,'Mark', 'mark']))

//Checks if element is string
// console.log(_.isString(true));
// console.log(_.isString('Mark'));

// console.log('Result:', notes.add(10, 55));
// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username} and you are ${notes.age}!`, (err) => {
//     if(err) {console.log('An error has occured')}
// });