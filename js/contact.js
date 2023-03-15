const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const text = document.querySelector("#message");
const message = document.querySelector("#text-message");
const button = document.querySelector("button");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 1) === false) {
        message.innerHTML += `<div class="no-requirement">Full name required</div>`;
    } else {
        message.innerHTML = "";
    }

    if (validateEmail(email.value) === false) {
        message.innerHTML += `<div class="no-requirement">Email should be an email</div>`;
    } else {
        message.innerHTML.display = "none";
    }

    if (checkLength(subject.value, 5) === false) {
        message.innerHTML += `<div class="no-requirement">Subject must have a minimum length of 5 letters</div>`;
    } else {
        message.innerHTML.display = "none";
    }

    if (checkLength(text.value, 5) === false) {
        message.innerHTML += `<div class="no-requirement">Message must have a minimum length of 5 letters</div>`;
    } else {
        message.innerHTML.display = "none";
    }

}

function submitForm(event) {
    event.preventDefault(); 
    if (checkLength(fullName.value, 1)
        && checkLength(subject.value, 5)
        && validateEmail(email.value)) {
        message.innerHTML += '<div class="success">Success! Your info was submitted</div>';
    } else {
        form.input.reset();
        form.message.reset();
    }
    
}

form.addEventListener("submit", validateForm);

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}