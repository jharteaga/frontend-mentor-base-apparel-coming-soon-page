const email = document.getElementById('email');
const button = document.querySelector('.button-container');
const msg = document.querySelector('small');

function showError(input, msg) {
  input.textContent = msg;
  input.classList.add('error');
  input.classList.remove('success');
}

function showSuccess(input, msg) {
  input.textContent = msg;
  input.classList.add('success');
  input.classList.remove('error');
}

function checkRequired(input) {
  if (email.value !== '') {
    if (checkEmail(email.value)) {
      showSuccess(msg, `Email sent`);
    } else {
      showError(msg, `Please provide a valid email`);
    }
  } else {
    showError(msg, `Please provide an email`);
  }
}

function checkEmail(email) {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
}

button.addEventListener('click', () => {
  checkRequired(email);
});

email.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') checkRequired(email);
});
