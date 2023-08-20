//Get DOM elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-2');

const fieldsArr = [username, email, password, password2]

function checkRequiredField(fieldsArr) {
    fieldsArr.forEach(field => {
        if (field.value === '') {
            showError(field, message);
        } else {
            showSuccess(field);
        }
    });
}

//Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequiredField(fieldsArr);
    // checkInputLength(username, 3, 15);
    // checkPasswordMatch(password, password2);
    // checkInputLength(password, 6, 25);
    // checkEmailFormat(email);
});


//////////////////////////////
//check required fields
//show input error message
//show success message
//check email format
//check passwords match
//check length of input
//get field name   
