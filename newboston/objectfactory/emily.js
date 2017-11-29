const movies = require('./movies');

let emilysMovies = movies();
emilysMovies.favMovie = "The Commitments";
console.log("Emily's favourite movie is: " + emilysMovies.favMovie);
