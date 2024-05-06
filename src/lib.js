import validator from "validator";
export const ERRORS = [
  {
    id: "full-name",
    msg: "Please enter your full name and do not include numbers.",
    validate(val) {
      return val.length > 6 && val.includes(" ") && !/\d/.test(val);
    },
  },

  {
    id: "email",
    msg: "Please enter a valid email address.",
    validate(val) {
      return validator.isEmail(val);
    },
  },
  {
    id: "phone",
    msg: "Please enter a valid phone number.",
    validate(val) {
      return validator.isMobilePhone(val, "en-US");
    },
  },
  {
    id: "message",
    msg: "Message field cannot be blank.",
    validate(val) {
      return val.trim() !== "";
    },
  },
];

export const hideError = (el) => {
  const parent = el.parentNode;
  const errorEls = parent.querySelectorAll(".error");
  errorEls.forEach((errorEl) => {
    parent.removeChild(errorEl);
  });
};
export const renderError = (el, msg) => {
  hideError(el);
  const errorElement = document.createElement("p");
  errorElement.className = "error is-error";
  errorElement.textContent = msg;
  el.parentNode.appendChild(errorElement);
};
