function simulateClick() {
  const checkboxes = [
    document.getElementById("cool"),
    document.getElementById("handsome"),
    document.getElementById("funny"),
    document.getElementById("All"),
  ];

  let index = 0;

  function clickNextCheckbox() {
    if (index < checkboxes.length) {
      let evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      checkboxes[index].dispatchEvent(evt);
      index++;
      setTimeout(clickNextCheckbox, 1000);
    }
  }

  clickNextCheckbox();
}

document
  .getElementById("buttonjstest")
  .addEventListener("click", simulateClick);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    alert("No No not yet");
  }
});
