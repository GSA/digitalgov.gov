/**
 * Scroll form into view when on the `/subscribe` page.
 */

const subscribeButton = document.querySelector(".subscribe-button");

if (subscribeButton) {
  const signupForm = document.querySelector("#newsletter-signup");

  subscribeButton.addEventListener("click", function() {
    signupForm.scrollIntoView({behavior: "smooth", block: "start"})
    signupForm.focus();
  });
}
