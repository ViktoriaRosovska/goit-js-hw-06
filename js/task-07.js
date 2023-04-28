const inputRange = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');
textChange.style.fontSize = inputRange.value + 'px';

inputRange.addEventListener('input', onChangeFont);

function onChangeFont(e) {
    textChange.style.fontSize = e.target.value + 'px';   
}