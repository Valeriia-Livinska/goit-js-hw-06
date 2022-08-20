const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ---solution 1 with map + fuction---
const ingredientsListElem = document.querySelector("#ingredients");

const makeIngredientsList = (ingredients) => {
  return ingredients.map((igredient) => {
    const itemElem = document.createElement("li");
    itemElem.textContent = igredient;
    itemElem.classList.add("item");
    return itemElem;
  });
};

const ingredientItemElem = makeIngredientsList(ingredients);
ingredientsListElem.append(...ingredientItemElem);

// ---solution 2 with map---

// const ingredientsListElem = document.querySelector('#ingredients');

// const ingredientItemElem = ingredients.map((igredient = '') => {
//   const itemElem = document.createElement("li");
//   itemElem.textContent = igredient;
//   itemElem.classList.add("item");
//   return itemElem;
// });

// ingredientsListElem.append(...ingredientItemElem);

// ---solution 3 with for (not one adding)---

// const ingredientsListElem = document.querySelector('#ingredients');

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemElem = document.createElement("li");
//   itemElem.textContent = ingredients[i];
//   itemElem.classList.add("item");
//   ingredientsListElem.append(itemElem);
// }
