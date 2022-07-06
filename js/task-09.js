const changeColorBtn = document.querySelector('button')
const text = document.querySelector('.widget span')
const bodyRef = document.querySelector('body')

changeColorBtn.addEventListener("click", changeColor);
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  text.textContent = `${getRandomHexColor()}`;
}