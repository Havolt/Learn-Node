// var obj = {
//     name: 'Mark Anthony'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj)
// console.log(stringObj)

// var personString = '{"name": "Mark Anthony", "age": 27}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

const originalNote = {
    title: 'Some title',
    body: 'Some body'
};
// originalNoteString
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);