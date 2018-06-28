const path = require('path');
const os = require('os');

let pathObj = path.parse(__filename);

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory + ' | Free Memory: ' + freeMemory);

//Template string

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);