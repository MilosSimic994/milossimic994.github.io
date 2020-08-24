const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message')
const formBtn = document.getElementById('form-btn');

const clients = [];

let id = 0;

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


const makeClietsList = (e) => {
    e.preventDefault()

    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('error')
        console.log('greska');
    } else {
        emailInput.classList.remove('error')
    }

    if (nameInput.value == '') {
        nameInput.classList.add('error')
    }
    else {
        nameInput.classList.remove('error')
    }
    if (messageInput.value == '') {
        messageInput.classList.add('error')
    }
    else {
        messageInput.classList.remove('error')
    }
    

    id++

    client = {
        id: id,
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    }

    clients.push(client)

    console.log(clients);
}

formBtn.addEventListener('click', makeClietsList)