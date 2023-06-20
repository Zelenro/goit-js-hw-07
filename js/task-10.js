function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const blockControlsEl = document.querySelector('#controls');
const inputEl = blockControlsEl.firstElementChild;
const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const boxesContainerEl = document.querySelector('#boxes');

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  let boxSize = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i += 1) {
    const boxColor = getRandomHexColor();
    boxesHTML += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor}"></div>`;
    boxSize += 10;
  }

  boxesContainerEl.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
}
