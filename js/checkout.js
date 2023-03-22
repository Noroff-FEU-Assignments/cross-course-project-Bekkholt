const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const card = document.querySelector("#card");
const date = document.querySelector("#date");
const ccv = document.querySelector("#ccv");
const message = document.querySelector("#message")
const button = document.querySelector("button");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let id = params.get("id");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 1) === false) {
        message.innerHTML += `<div class="no-requirement">Name on card is required</div>`;
    } else {
        message.innerHTML = "";
    }

    if (checkLength(card.value, 16) === false) {
        message.innerHTML += `<div class="no-requirement">Card number must be valid</div>`;
    } else {
        message.innerHTML.display = "none";
    }

    if (validateDate(date.value) === false) {
        message.innerHTML += `<div class="no-requirement">Month/Year must be a valid date</div>`;
    } else {
        message.innerHTML.display = "none";
    }

    if (validateCcv(ccv.value) === false) {
        message.innerHTML += `<div class="no-requirement">CCV must be valid</div>`
    } else {
        message.innerHTML.display = "none";
    }

}

function submitForm(event) {
    event.preventDefault(); 
    if (checkLength(fullName.value, 1)
        && checkLength(card.value, 16)
        && validateDate(date.value)
        && validateCcv(ccv.value)) {
        checkoutSuccess()
    } else {
        form.input.reset();
        form.message.reset();
    }
    
}

function checkoutSuccess() {
    window.location.href = `/checkout-success.html?id=${id}`;
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

function validateCard(card) {
    const regEx = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const patternMatches = regEx.test(card);
    return patternMatches;
}

function validateDate(date) {
    const regEx = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const patternMatches = regEx.test(date);
    return patternMatches;
}

function validateCcv(ccv) {
    const regEx = /^[0-9]{3,4}$/;
    const patternMatches = regEx.test(ccv);
    return patternMatches;
}