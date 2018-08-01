
const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = () => {
    if(this.readyState == 4 && this.status == 200) {
        myLogger(xhttp.responseText);
    }
}

function myLogger(info) {
    console.log(myLogger);
}

document.querySelector('#myTAB').addEventListener('click', () => {
    const newObj = {};
    newObj.textA = document.querySelector('#myTA').value;
    console.log(newObj);
    window.fetch('/send', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(newObj)
    })
});