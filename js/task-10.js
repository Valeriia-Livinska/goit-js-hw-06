const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const arrayElementsToAdd = [];
  for (let i = 1; i <= amount; i += 1) {
    arrayElementsToAdd.push(document.createElement("div"));
  }
  divContainer.append(...arrayElementsToAdd);
  const arrayAddedElements = divContainer.childNodes;

  let width = 30;
  let height = 30;
  arrayAddedElements.forEach((divItem) => {
    divItem.style.backgroundColor = getRandomHexColor();
    divItem.style.width = `${width}px`;
    divItem.style.height = `${height}px`;
    width += 10;
    height += 10;
  });
}

function destroyBoxes() {
  divContainer.innerHTML = "";
}

const onCreateBtnClick = (event) => {
  const amount = Number(document.querySelector("input").value);

  createBoxes(amount);
  alert(`Создано ${amount} элементов`);
};

const onDestroyBtnClick = (event) => {
  destroyBoxes();
  alert(`Созданные элементы удалены`);
};

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);
