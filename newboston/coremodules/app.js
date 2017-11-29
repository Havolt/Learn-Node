const http = require('http');
const fs = require('fs');
const path = require('path');
let websiteHome = "desktop//mark/downloads/index.html";
let websiteAbout = "desktop/mark/downloads/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));



console.log(__dirname + ' Is the directory name.');
console.log(__filename + ' Is the directory name along with the file name');


/*
fs.writeFileSync("chicken.txt", "Chicken is the most wonderful food on the planet")
console.log(fs.readFileSync("chicken.txt").toString());
*/


http.createServer(function(req, res){


}).listen(8888);
