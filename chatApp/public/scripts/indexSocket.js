var socket = io.connect('http://localhost:3000');

let chatData = [];
let userData = {
    name: ''
}
const staticData = {
    nameRegex: /^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$/g
}

function writeChat(data){
    let currMsg = chatData[chatData.length -1].msg;
    const newEl = document.createElement('div');
    newEl.classList.add('chatMsg');
    const newElUser = document.createElement('div');
    newElUser.innerHTML = chatData[chatData.length -1].name;
    newElUser.classList.add('chatUser');
    newEl.appendChild(newElUser);
    const newElMsg = document.createElement('div');
    newElMsg.innerHTML = currMsg;
    newElMsg.classList.add('chatText');
    newEl.appendChild(newElMsg);
    if(newElUser.innerHTML == userData.name) {
        newElUser.classList.add('myMessage');
        newElMsg.classList.add('myMessageB');
    }
    document.querySelector('#chatMain').appendChild(newEl);
}

function sendMsg(){
    if(!userData.name){
        document.querySelector('#msgInput').value ='';
        document.querySelector('#msgInput').placeholder = 'No username found..';
        return;
    }
    const userMsg = document.querySelector('#msgInput').value;
    if(userMsg.length > 0){
        socket.emit('message', {msg: userMsg, name: userData.name});
        document.querySelector('#msgInput').value = '';
    }
}

function nameCheck(uName) {
    console.log(uName.value.length);

    if(uName.value.length < 3) {
        document.querySelector('#nameWarning').innerHTML = 'Must be longer than 3 characters.';
    }
    else if(uName.value.match(staticData.nameRegex)) {
        userData.name = uName.value;
        document.querySelector('#hAll').classList.add('hideEl');
        document.querySelector('#topUserName').innerHTML = userData.name;
    }
    else {
        document.querySelector('#nameWarning').innerHTML = 'Please use only letters, numbers, dashes and underscores';
    }
    document.querySelector('#nameWarning').classList.remove('hideEl');
    if(document.querySelector('#nameInAll').classList.length < 1){
        document.querySelector('#nameInAll').classList.add('shakeEl');
    }
    setTimeout(()=>{
        document.querySelector('#nameInAll').classList.remove('shakeEl');
    }, 500)

}

socket.on('news', function (data) {
console.log(data);
socket.emit('my other event', { my: 'data' });
});

socket.on('message', (data) => {
    chatData.push(data);
    //document.querySelector('#chatMain').innerHTML += '<br>' + data.msg;
    writeChat(chatData);
})

document.querySelector('#msgSend').addEventListener('click', () => {
    sendMsg();
})
document.querySelector('#msgInput').addEventListener('keydown', (e) => {
    if(e.keyCode == 13) { 
        sendMsg();
        e.preventDefault();
    }
});

document.querySelector('#nameInput').addEventListener('keydown', (e) => {
    e.keyCode == 13 ? nameCheck(document.querySelector('#nameInput')) : '';
});
document.querySelector('#nameButton').addEventListener('click', () => {
    nameCheck(document.querySelector('#nameInput'));
});
document.querySelector('#nameInput').addEventListener('input', (e) => {
    console.log(document.querySelector('#nameWarning').classList.length);
    if(document.querySelector('#nameWarning').classList.length < 1){
        console.log(document.querySelector('#nameWarning').classList.length)
        document.querySelector('#nameWarning').classList.add('hideEl');
    }
});
