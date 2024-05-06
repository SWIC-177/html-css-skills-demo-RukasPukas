/**
 * TODO:
 * 2. 'Select' the submit button.
 * 3. Add event listeners to each input field, such that
 *  upon losing focus (`blur` event) on the input fields, we will
 * show the error. For now, we are not validating the input fields.
 */

import { ERRORS } from "./src/lib";
console.log(ERRORS);
const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
  document.querySelector("#submit-button"),
];
console.log(formEls);

const submitBtn = document.querySelector("button[type='submit']");

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    const error = ERRORS.find((error) => error.id === e.target.id);
    if (error) {
      const isValid = error.validate(e.target.value);
      if (!isValid) {
        console.log(error.msg);
      } else {
        console.log("Name is valid");
      }
    }
  });
});
