const loginFormEl = document.querySelector('.login-form');
const emailEl = loginFormEl.elements.email;
const passwordEl = loginFormEl.elements.password;

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();
  if (!emailEl.value.trim() || !passwordEl.value.trim()) {
    alert('All fields must be filled!');
  } else {
    console.log(`Email: ${emailEl.value}, Password: ${passwordEl.value}`);
    loginFormEl.reset();
  }
});
