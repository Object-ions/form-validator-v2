//Get DOM elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Check required field
function checkRequiredField(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${input.id} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//Check email format
function checkEmailFormat(input) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(input.value);
}

//Show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    formControl.querySelector('small').innerText = message;
}

//Show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequiredField([username, email, password, password2]);
});


//////////////////////////////
//check required fields
//show input error message
//show success message
//check email format
//check passwords match
//check length of input
//get field name   
