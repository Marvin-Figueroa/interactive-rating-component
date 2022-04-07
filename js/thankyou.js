const urlParams = window.location.search;
const ratingMessage = document.querySelector(".card__rating");
let ratingNumber;

if (urlParams) {
  ratingNumber = urlParams.slice(urlParams.lastIndexOf("=") + 1);
  ratingMessage.textContent = `You selected ${ratingNumber} out of 5`;
  ratingMessage.style.display = "block";
}
