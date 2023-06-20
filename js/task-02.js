const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');
const fragment = [];

ingredients.forEach(function (ingredient) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  fragment.push(li);
});

fragment.forEach(function (li) {
  listIngredientsEl.appendChild(li);
});
