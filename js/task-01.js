const categoriesElem = document.querySelectorAll("li.item");
console.log("Number of categories:", categoriesElem.length);

// --- solution 1 with forEach ---

categoriesElem.forEach((item) => {
  const categoryItemTitle = item.firstElementChild.textContent;
  console.log("Category:", categoryItemTitle);

  const categoryItemElem = item.lastElementChild.children;
  console.log("Elements:", categoryItemElem.length);
});

// --- solution 2 with for ---
// for (let i = 0; i < categoriesElem.length; i += 1) {
//   const categoryItemTitle = categoriesElem[i].firstElementChild.textContent;
//   console.log("Category:", categoryItemTitle);

//   const categoryItemElem = categoriesElem[i].lastElementChild.children;
//   console.log("Elements:", categoryItemElem.length);
// }
