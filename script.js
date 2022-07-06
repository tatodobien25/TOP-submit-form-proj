"use strict"

function validate_password() {
    var pass = document.querySelector('input#password').value;
    var confirm_pass = document.querySelector('input#password-confirmation').value;

    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').textContent
            = '☒ Use same password';
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('submit-btn').style.opacity = (0.4);
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').textContent =
            '🗹 Password Matched';
        document.getElementById('submit-btn').disabled = false;
        document.getElementById('submit-btn').style.opacity = (1);
    }
}

function wrong_pass_alert() {
    if (document.getElementById('password').value != "" &&
        document.getElementById('password-confirmation').value != "") {
        alert("Your response is submitted");
    } else {
        alert("Please fill all the fields");
    }
}

const signUpButton = document.querySelector('#submit-btn');
const pwdConfirmation = document.querySelector('input#password-confirmation');
signUpButton.addEventListener('click', wrong_pass_alert);
pwdConfirmation.addEventListener('keyup', validate_password);