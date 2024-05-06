/**
 * TODO:
 * 2. 'Select' the submit button.
 * 3. Add event listeners to each input field, such that
 *  upon losing focus (`blur` event) on the input fields, we will
 * show the error. For now, we are not validating the input fields.
 */

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
  document.querySelector("#submit-button"),
];
console.log(formEls);

const submitBtn = document.querySelector("button[type='submit']");

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    console.log("blur Event", e.target.id, "value:", e.target.value);
  });
});
