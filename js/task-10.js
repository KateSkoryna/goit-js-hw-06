const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('#controls')
const containerEl = document.querySelector('#boxes')


createBtn.addEventListener('click', () => createBoxes(inputEl.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 20;
  const boxEl = [];

  for (let i = 0; i < amount; i += 1) {
    size = size + 10;
    const box = document.createElement('div');
    box.style.backgroundColor = `${getRandomHexColor()}`
    box.style.width = size + 'px'
    box.style.height = size + 'px'
    box.classList.add('box-item')
    boxEl.push(box)
  }
  containerEl.append(...boxEl)
  return containerEl
}

function destroyBoxes() {
  containerEl.innerHTML = "";
  inputEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const ref = {
//   controlsDiv: document.querySelector("#controls"),
//   input: document.querySelector("input"),
//   btnCreate: document.querySelector("[data-create]"),
//   btnDestroy: document.querySelector("[data-destroy]"),
//   divParent: document.querySelector("#boxes")
// }
// ref.btnCreate.addEventListener("click", (e) => createBoxes(+ref.input.value));
// ref.btnDestroy.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i += 1) {
//     const item = document.createElement("div");
     
//     item.style.backgroundColor = getRandomHexColor()
//     item.style.width =  `${30 + i * 10}px`;
//     item.style.height =  `${30 + i * 10}px`;

//     ref.divParent.append(item);
//   }
 
// };

// function destroyBoxes() {
//   ref.divParent.innerHTML = ""
// }