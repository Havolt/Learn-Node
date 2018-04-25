
let movies = require('./movies');

let caitMovies = movies();

caitMovies.favMovie = 'Les Miserables';

console.log("Cait's favourite movie is " + caitMovies.favMovie);