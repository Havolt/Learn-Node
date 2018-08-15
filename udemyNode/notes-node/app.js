console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);
console.log('Yargs', argv);

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('New note entered');
        notes.logNote(note);
    } else {
        console.log('Duplicate note entered');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    const readNote = notes.getNote(argv.title);
    if(readNote) {
        notes.logNote(readNote);
    } else{ console.log(`Message not found with title: '${argv.title}'`) }
} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    
} else {
    console.log('command not recognized');
}

