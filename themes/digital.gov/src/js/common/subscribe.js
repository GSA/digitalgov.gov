// scroll form into view when on /subscribe page
const subscribeButton = document.querySelector(".subscribe-button");
const signupForm = document.querySelector("#newsletter-signup ");
const form = document.querySelector("#signup-form");

subscribeButton.addEventListener("click", function() {
  signupForm.scrollIntoView({behavior: "smooth", block: "start"})
  signupForm.focus();
})