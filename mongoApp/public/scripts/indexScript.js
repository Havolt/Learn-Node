

function myLogger(info) {
    console.log(myLogger);
};

document.querySelector('#userInfo').addEventListener('click', () => {
    const newObj = {};
    newObj.name = document.querySelector('#userName').value;
    newObj.age = document.querySelector('#userAge').value;
    newObj.comment = document.querySelector('#userComment').value;
    console.log(newObj);
    window.fetch('/send', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObj)
    })
    .then((res) => {
        return res.json();
    })
    .then((myJson) => {
        console.log(myJson)
    })
});