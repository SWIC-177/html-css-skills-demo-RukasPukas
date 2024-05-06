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
      return val.includes("@") && val.includes(".");
    },
  },
  { id: "phone", msg: "Please enter a valid phone number." },
  {
    id: "message",
    msg: "Please enter a message between 10 and 100 characters.",
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
  const errorElement = document.createElement("p");
  errorElement.className = "error is-error";
  errorElement.textContent = msg;
  el.parentNode.appendChild(errorElement);
};
