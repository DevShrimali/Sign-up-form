const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    if (isValid) {
        storeFormData();
    }
}
// Event Listener

form.addEventListener('submit', processFormData)
