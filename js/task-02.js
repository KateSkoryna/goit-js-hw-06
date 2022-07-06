const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsList = document.querySelector('#ingredients');

const getItems = items => items.map(item => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('item')
  itemEl.textContent = `${item}`
  return itemEl;
})

const ingredientsItems = getItems(ingredients);
itemsList.append(...ingredientsItems)

console.log(itemsList)


// ВТОРОЙ ВАРИАНТ. КАКОЙ ЛУЧШЕ И ПОЧЕМУ?

// const getItems = items => {
//   const listEl = document.querySelector('#ingredients');

//   const ingredientsItems = ingredients.map(ingredient => {
//   const item = document.createElement('li')
//   item.classList.add('item')
//   item.textContent = `${ingredient}`
//   return item;
//   })

//   listEl.append(...ingredientsItems)
//   return listEl
// }

// const ingredientsList = getItems(ingredients);
// console.log(ingredientsList)
