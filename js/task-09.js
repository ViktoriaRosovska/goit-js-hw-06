function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newChangeColor = getRandomHexColor();
  document.body.style.backgroundColor = newChangeColor;
  textColor.textContent = newChangeColor;
}
