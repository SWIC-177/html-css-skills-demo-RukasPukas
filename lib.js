const ERRORS = [
  {
    id: "full-name",
    msg: "Please enter your full name.",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  { id: "email", msg: "Please enter a valid email address." },
  { id: "phone", msg: "Please enter a valid phone number." },
  {
    id: "message",
    msg: "Please enter a message between 10 and 100 characters.",
  },
];
