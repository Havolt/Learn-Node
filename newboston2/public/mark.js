

let movies = require('./movies');


let markMovies = movies();

markMovies.favMovie = 'Goodfellas';

console.log("Mark's favourite movie is " + markMovies.favMovie);