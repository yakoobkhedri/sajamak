const form = document.querySelector('form');
form.addEventListener('submit', validate);

function validate(event) {
  const pass = document.getElementById('pass');
   if (pass.value.length < 6 || pass.value.length > 9) {
    document.querySelector('.formLogin').classList.add('error')
    event.preventDefault();
  }
}