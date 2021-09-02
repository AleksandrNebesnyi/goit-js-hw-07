const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");

const makeIngredientsItem = () => {
  return ingredients.map((ingredient) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    // console.log(ingredientEl.textContent);
    return ingredientEl;
  });
};

const elements = makeIngredientsItem(ingredients);
// console.log(elements);

ingredientsEl.append(...elements);
