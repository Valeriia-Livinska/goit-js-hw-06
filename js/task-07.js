const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onSliderInput = (event) => {
  textEl.style.fontSize = `${sliderEl.value}px`;
};

sliderEl.addEventListener("input", onSliderInput);
