const buttonEl = document.querySelector('#counter');
const decrementEl = buttonEl.lastElementChild;
const incrementEl = buttonEl.firstElementChild;
const counterValueEl = document.querySelector('#value');
let counterValue = 0;

decrementEl.addEventListener('click', () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});

incrementEl.addEventListener('click', () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});
