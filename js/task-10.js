function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBoxes = document.querySelector('#boxes');
const amountBox = document.querySelector('#controls input[type=number]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

function createBoxes(container, amount) {
  let markap = '';
  let widthBox = 30;

  for (let i = 0; i < amount * 10; i += 10) {
    markap += `<div style="width:${widthBox + i}px; height:${widthBox + i}px; background-color:${getRandomHexColor()};">${i / 10 + 1}</div>`;
  }

  container.insertAdjacentHTML('beforeend', markap);
}

createBtn.addEventListener('click', () => {
  const amountBoxNumber = Number.parseInt(amountBox.value);
  createBoxes(divBoxes, amountBoxNumber);
});

destroyBtn.addEventListener('click', destroyBoxes.bind(divBoxes));

function destroyBoxes() {
  this.innerHTML = '';
}