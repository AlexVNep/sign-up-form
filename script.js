const  pwd = document.querySelector('#pwd');
const conpwd =document.querySelector('#conpwd');
const p = document.querySelector('.p');

// pwd.addEventListener('change', passwordCheck);

function passwordCheck() {
    if (pwd.value != conpwd.value) {
        let para = document.createElement('p');
        let node = document.createTextNode('Password does not match!');
        para.appendChild(node);
        p.appendChild(para);
    }
}

