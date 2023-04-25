const inputInsertEl = document.querySelector('#name-input');
const titleNameEl = document.querySelector('#name-output');

inputInsertEl.addEventListener('input', (event) => {
    titleNameEl.textContent = event.currentTarget.value;
    if (inputInsertEl.value === '') {
    titleNameEl.textContent = 'Anonymous';
}
});
