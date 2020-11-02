// Variables

const searchForUser = document.querySelector(".form-field");
const messageForUser = document.querySelector("#messageField");
const send = document.querySelector("#send");

send.addEventListener('click', () => {
    if (searchForUser.value === '') {
        alert('The Name field is empty, please fill out the name field');
    } else if (messageForUser.value === '') {
        alert('The message field is empty, please fill out the message field');
    } else {
        alert(`You sent ${searchForUser.value} the message: ${messageForUser.value}`);
    }
});
