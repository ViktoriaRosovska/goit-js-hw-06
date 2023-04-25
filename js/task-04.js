let counterValue = 0;
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

btnDecrementRef.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

btnIncrementRef.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});