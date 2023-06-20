function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColorEl = document.querySelector('.widget').parentNode;
const nameColorEl = document.querySelector('.color');
const changeColorButtonEl = document.querySelector('.change-color');

changeColorButtonEl.addEventListener('click', btnClick);
function btnClick() {
  const randomColor = getRandomHexColor();
  bodyColorEl.style.backgroundColor = randomColor;
  nameColorEl.textContent = randomColor;
}
