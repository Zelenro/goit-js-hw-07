const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', borderColor);

function borderColor() {
  const inputValidEl = Number(inputEl.dataset.length);
  const inputInvalidEl = inputEl.value.length;

  const bool = inputInvalidEl === inputValidEl;

  inputEl.classList.toggle('valid', bool);
  inputEl.classList.toggle('invalid', !bool);
}
