function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorNumber = document.querySelector(".color");

const onChangeColorClick = (event) => {
  const receivedColor = getRandomHexColor();
  colorNumber.textContent = receivedColor;
  document.body.style.backgroundColor = receivedColor;
};

changeColorBtn.addEventListener("click", onChangeColorClick);
