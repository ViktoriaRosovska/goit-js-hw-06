const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
    e.target.value = e.target.value.replaceAll(' ', '');
    const dataLength = e.target.getAttribute('data-length');
    if (e.target.value.length == dataLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
}