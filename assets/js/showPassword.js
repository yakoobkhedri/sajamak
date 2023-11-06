const togglePassword = document.querySelector("#togglePassword");
const togglePassword2 = document.querySelector("#togglePassword2");
const password = document.querySelector("#pass1");
const password2 = document.querySelector("#pass2");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  
  // toggle the icon
  this.classList.toggle("bi-eye");
});

togglePassword2.addEventListener("click", function () {
  // toggle the type attribute
  const type = password2.getAttribute("type") === "password" ? "text" : "password";
  password2.setAttribute("type", type);
  
  // toggle the icon
  this.classList.toggle("bi-eye");
});