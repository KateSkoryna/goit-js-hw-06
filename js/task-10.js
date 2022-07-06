const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputNumber = document.querySelector('input');
const listEl = document.querySelector('#controls')
const containerEl = document.querySelector('#boxes')


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputNumber.value;
  let size = 20;
  
  for (let i = 1; i <= amount; i += 1) {
    size = size + 10;
    const box = document.createElement('div');
    box.style.backgroundColor = `${getRandomHexColor()}`
    box.style.width = size + 'px'
    box.style.height = size + 'px'
    box.classList.add('box-item')
    containerEl.appendChild(box)
  }
  return containerEl
}

function destroyBoxes() {
  containerEl.innerHTML = "";
  inputNumber.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




