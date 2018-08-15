const fs = require('fs');

let fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let duplicateNotes = notes.filter((note) => note.title === title);
    
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log('Note already exists');
    }
};

let getAll = () => {
    return fetchNotes();
};

let getNote = (title) => {
    const notes = fetchNotes();
    let matchingNote = notes.filter((note) => title == note.title);
    return matchingNote[0];
};

let removeNote = (title) => {
    //fetch notes
    let notes = fetchNotes();
    //filter notes and remove one with title of arg
    let filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
    console.log(`---`);
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
} 

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}