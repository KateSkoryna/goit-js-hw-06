const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsList = document.querySelector('#ingredients');

const getItems = (items) => ingredients.map(ingredient => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('item')
  itemEl.textContent = `${ingredient}`
  
  return itemEl;
})

const ingredientsItems = getItems(ingredients);
itemsList.append(...ingredientsItems)

console.log(itemsList)

