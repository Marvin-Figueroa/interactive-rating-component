const submitButton = document.querySelector(".card__btn");
const radioButtons = document.querySelectorAll('input[type="radio"]');

Array.from(radioButtons).forEach((radio) => {
  radio.addEventListener("change", function () {
    submitButton.removeAttribute("disabled");
  });
});
