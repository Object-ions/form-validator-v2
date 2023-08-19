//Get DOM elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Check required field
function checkRequiredField(input) {
    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
}

//Show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    formControl.querySelector('small').innerText = message;
}

//Show success message
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequiredField();
});


//////////////////////////////
//check required fields
//show input error message
//show success message
//check email format
//check passwords match
//check length of input
//get field name   
