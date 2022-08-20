let inputElem = document.querySelector("#name-input");
let greetingName = document.querySelector("#name-output");

const handleInputElemFill = (event) => {
  inputElem.value.trim() !== ""
    ? (greetingName.textContent = inputElem.value.trim())
    : (greetingName.textContent = "Anonymous");
};

inputElem.addEventListener("input", handleInputElemFill);
