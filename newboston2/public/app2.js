

let fs = require('fs');
fs.writeFileSync('boone.txt', 'Woof woof, I good boy.');
console.log(fs.readFileSync('boone.txt').toString());

let path = require('path');
let websiteHome = "desktop/mark//thenewboston/index.html";
let websiteAbout = "desktop/mark/thenewboston/about.html";
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

setInterval(function(){
    console.log('pizza');
}, 2000)

console.log(__dirname);
console.log(__filename);