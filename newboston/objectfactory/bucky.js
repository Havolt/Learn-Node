const movies = require('./movies');

let buckysMovies = movies();
buckysMovies.favMovie = "Goodfellas";
console.log("Bucky's favourite movie is: " + buckysMovies.favMovie);
