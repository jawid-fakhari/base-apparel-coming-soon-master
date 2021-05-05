var email = document.getElementById("mail");

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail");
  } else {
    email.setCustomValidity("");
  }
});