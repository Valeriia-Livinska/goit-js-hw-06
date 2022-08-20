const inputElem = document.querySelector("#validation-input");

const validSymbolAmount = Number(
  document.querySelector("input[data-length]").dataset.length
);

const inputValidationHandler = (event) => {
  inputElem.classList.add("invalid");
  if (inputElem.value.trim().length === validSymbolAmount) {
    inputElem.classList.replace("invalid", "valid");
  } else {
    inputElem.classList.replace("valid", "invalid");
  }
};

inputElem.addEventListener("blur", inputValidationHandler);
