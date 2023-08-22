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
}

//Clean fields after submit
function cleanField(fieldsArr) {
    fieldsArr.forEach(field => {
        field.value = '';
    });
}

//Check input length
function checkInputLength(field, min, max) {
    if (field.value.length < min || field.value.length > max) {
        message = `${getFieldName(field)} must be between ${min} and ${max} characters long`;
        showError(field, message);
    } else {
        showSuccess(field);
    }
}

// //Check password match
function checkPasswordMatch(password, password2) {
    if (password.value !== password2.value || password.value === '') {
        showError(password, 'Passwords do not match');
        showError(password2, 'Passwords do not match');
    } else {
        showSuccess(password2);
    }
}

//Check email format
function checkEmailFormat(field) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(field.value.trim())) {
        showSuccess(field);
    } else {
        showError(field, 'Invalid email');
    }
}

//Check if all fields have success class
function allFieldsAreSuccessful(fieldsArr) {
    return fieldsArr.every(field => {
        const formControl = field.parentElement;
        return formControl.classList.contains('success');
    });
}

//Show success popup
function showPopupSuccess() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

//Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequiredField(fieldsArr);
    checkInputLength(username, 3, 15);
    checkInputLength(password, 6, 25);
    checkPasswordMatch(password, password2);
    checkEmailFormat(email);

    //Check if all fields are successful
    if (allFieldsAreSuccessful(fieldsArr)) {
        showPopupSuccess();
        cleanField(fieldsArr);
    }
});
