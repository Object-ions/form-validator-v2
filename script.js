//Get DOM elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-2');

const fieldsArr = [username, email, password, password2]

//Check required fields
function checkRequiredField(fieldsArr) {
    fieldsArr.forEach(field => {
        if (field.value.trim() === '') {
            showError(field, `${getFieldName(field)} is required`);
        } else {
            showSuccess(field);
        }
    });
}

//Get field name
function getFieldName(field) {
    return field.id.charAt(0).toUpperCase() + field.id.slice(1);
}

//Show values in console
function showLog() {
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(password2.value);
}

//Show error message
function showError(field, message) {
    const formControl = field.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success message
function showSuccess(field) {
    const formControl = field.parentElement;
    formControl.className = 'form-control success';
    cleanField(field);
}

//Clean fields after submit
function cleanField(field) {
    field.value = '';
}

//Check input length
function checkInputLength(field, min, max) {
    if (field.value.length < min || field.value.length > max) {
        message = `${getFieldName(field)} must be between ${min} and ${max} characters long`;
        showError(field, message);
    } else {
        showSuccess();
    }
}

//Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    showLog();
    checkRequiredField(fieldsArr);
    checkInputLength(username, 3, 15);
    // checkPasswordMatch(password, password2);
    // checkInputLength(password, 6, 25);
    // checkEmailFormat(email);
});
