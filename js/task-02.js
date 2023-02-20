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
ingredients.forEach((ingredient) => {
  const ingredientTag = document.createElement("li");
  ingredientTag.classList.add("item");
  ingredientTag.textContent = ingredient;
 modTags.push(ingredientTag);
});
ingredientList.prepend(...modTags);
console.log(...modTags);

