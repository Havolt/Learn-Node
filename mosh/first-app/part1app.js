
/*
    console.log(); //Global
    //Functions work as usual in node
    setTimeout();
    clearTimeout();
    setInterval();
    clearInterval();


    let message = '';
    console.log(module);
*/

//Set as constant as to not accidentally overwrite
const log = require('./logger');

log('Making some modules');
