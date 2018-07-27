var socket = io.connect('http://localhost:3000');

let chatData = [];
let userData = {
    name: ''
}

function writeChat(data){
    let currMsg = chatData[chatData.length -1].msg;
    const newEl = document.createElement('div');
    newEl.classList.add('chatMsg');
    const newElMsg = document.createElement('div');
    newElMsg.innerHTML = currMsg;
    newEl.appendChild(newElMsg);
    document.querySelector('#chatMain').appendChild(newEl);
}

function sendMsg(){
    const userMsg = document.querySelector('#msgInput').value;
    socket.emit('message', {msg: userMsg});
    document.querySelector('#msgInput').value = '';
}

function nameCheck(uName) {
    console.log(uName.value.length);

    if(uName.value.length < 3) {
        console.log('here');
        document.querySelector('#nameWarning').innerHTML = 'Must be longer than 3 characters.';
        console.log('now here');
    }
    else {

    }

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
})
