import { ERRORS, hideError, renderError } from "./src/lib";
console.log(ERRORS);
const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
  document.querySelector("#submit-button"),
];
console.log(formEls);

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    const elError = ERRORS.find((error) => error.id === e.target.id);
    if (elError && !elError.validate(e.target.value)) {
      renderError(e.target, elError.msg);
    } else {
      hideError(e.target);
    }
  });
});
