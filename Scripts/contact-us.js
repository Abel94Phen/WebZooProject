const first_name = document.getElementById('first-name');
const first_name_error = document.getElementById('first-name-error');

const last_name = document.getElementById('last-name');
const last_name_error = document.getElementById('last-name-error');

const email = document.getElementById('email');
const email_error = document.getElementById('email-error');

const description = document.getElementById('description')
const description_error = document.getElementById('description-error')



const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    first_name_error.innerText = "";
    last_name_error.innerText = "";
    email_error.innerText = "";
    description_error.innerText = "";

    if (first_name.value === '' || first_name.value == null) {
        e.preventDefault();
        first_name_error.innerText = "First Name is REQUIRED!!";
    }

    if (last_name.value === '' || last_name.value == null) {
        e.preventDefault();
        last_name_error.innerText = "Last Name is REQUIRED!!"
    }

    if (email.value === '' || email.value == null) {
        e.preventDefault();
        email_error.innerText = "Email is REQUIRED!!"
    }

    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        e.preventDefault();
        email_error.innerText = "Email must be valid."
    }

    if (description.value === '' || description.value == null) {
        e.preventDefault();
        description_error.innerText = "Description is REQUIRED!!";
    }

    else if((description.value.length)<100) {
        e.preventDefault();
        description_error.innerText = "minimum of 150 characters required";
    }

    else {
        alert (`We have received your request ${first_name.value} ${last_name.value}. We will look at your question and contact you back via the email address you provided.`)
    }
});