const  pwd = document.querySelector('#pwd');
const conpwd =document.querySelector('#conpwd');
const p = document.querySelector('.p');

pwd.addEventListener('blur', passwordCheck);
conpwd.addEventListener('blur', confirmPasswordCheck);

function resetError(element) {
    p.textContent = ' ';
    if (element.classList.contains('invalid')) {
        element.classList.remove('invalid');
    }
}

function showError(element, message) {
    //Adds the class invalid to the element showError is being called on
    element.classList.add('invalid');
    p.textContent = message;
}

function isEmpty(string) {
    return string === ' ';
}

function passwordCheck() {
    const password = pwd.value;
    const confirmPassword = conpwd.value;
    resetError(pwd);
    if (!isEmpty(confirmPassword)) {
        if (password === confirmPassword) {
            return true;
        }
        showError(conpwd, 'Passwords do not match');
        return false;
    }
}

function confirmPasswordCheck () {
    const password = pwd.value;
    const confirmPassword = conpwd.value;
    resetError(conpwd);
    if (!isEmpty(confirmPassword)) {
        if (confirmPassword === password) {
            return true;
        }
        showError(pwd, 'Passwords do not match');
        return false;
    }
}