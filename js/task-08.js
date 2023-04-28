const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onLogin);

function onLogin(event) {
    event.preventDefault();
    const userRef = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    }
    if (userRef.email === '' || userRef.password === '') {
        alert('Please, enter all fields in form');
        return;
    }
    userRef.password = userRef.password.replaceAll(' ', '');
    console.log(userRef);
    event.currentTarget.reset();
}
    
    