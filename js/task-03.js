const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryElem = document.querySelector(".gallery");

const markup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery__item"><img class="gallery__image" src="${url}" alt="${alt}" width="200"></li>`
  )
  .join("");

galleryElem.insertAdjacentHTML("beforeend", markup);

galleryElem.style.cssText = `list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    margin: 0;
  `;
