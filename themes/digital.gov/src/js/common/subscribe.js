// scroll form into view when on /subscribe page
const subscribeButton = document.querySelector(".subscribe-button");
const signupForm = document.querySelector(".usa-sign-up");

subscribeButton.addEventListener("click", function() {
  signupForm.scrollIntoView({behavior: "smooth", block: "start"})
  signupForm.focus();
})