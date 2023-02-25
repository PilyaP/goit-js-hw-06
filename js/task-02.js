const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientList = document.querySelector("#ingredients");
const modTags = [];

// ingredients.forEach((ingredient) => {
//   const ingredientTag = document.createElement("li");
//   ingredientTag.classList.add("item");
//   ingredientTag.textContent = ingredient;
//  modTags.push(ingredientTag);
// });
// ingredientList.prepend(...modTags);
// console.log(...modTags);
// const ingredientsList = document.querySelector('#ingredients');

// const items = ingredients.map(ingredient => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('item');
//   listItem.textContent = ingredient;

//   return listItem;
// });
// console.log(items);

// ingredientsList.append(...items);

// const ingredientEl = document.getElementById("ingredients");



// const fragment = document.createDocumentFragment();



// for (const ingredient of ingredients) {

//   const liEl = document.createElement('li');

//   liEl.textContent = ingredient;

//   liEl.classList.add('item');

//   fragment.appendChild(liEl);

// }



// ingredientEl.appendChild(fragment);