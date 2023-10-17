
const donation_type = document.form.type;
const donation_amount = document.form.amount;
const donation_purpose = document.getElementById('purpose');


const email = document.getElementById('email');
const donation_type_error = document.getElementById('donation-type-error');
const donation_amount_error = document.getElementById('donation-amount-error');
const donation_purpose_error = document.getElementById('donation-purpose-error');


document.getElementById('form').addEventListener('submit', (e) => {
    var valid = false;
    
    donation_type_error.innerText = "";
    donation_amount_error.innerText = "";
    donation_purpose_error.innerText = "";
    email_error.innerText = "";
    
    for(var i=0; i < donation_type.length; i++) {
        if(donation_type[i].checked) {
            valid = true;
            break;
        }
    }
    
    if (!valid) {
        e.preventDefault();
        document.getElementById('donation-type-error').innerText = "* Choose one";
    }

    valid =false;

    for(var i=0; i < donation_amount.length; i++) {
        if(donation_amount[i].checked) {
            valid = true;
            break;
        }
    }

    if(!valid) {
        e.preventDefault();
        document.getElementById('donation-amount-error').innerText = "* Choose one";
    }

    if(donation_purpose.value == '') {
        e.preventDefault();
        document.getElementById('donation-purpose-error').innerText = "* Choose one option";
    }

    else if(!(donation_purpose.value == "FOOD" || donation_purpose.value == "RESEARCH" || donation_purpose.value == "SHELTER")) {
        e.preventDefault();
        document.getElementById('donation-purpose-error').innerText = "* Choose one option from the list";
    }

    if (email.value === '' || email.value == null) {
        e.preventDefault();
        email_error.innerText = "* Email is REQUIRED!!"
    }
})


