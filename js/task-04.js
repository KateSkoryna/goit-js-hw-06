const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action = increment]')
const countEl = document.querySelector('#value')
let currentValue = 0;


decrementBtn.addEventListener('click', () => {
    countEl.textContent =  currentValue -= 1;
})

incrementBtn.addEventListener('click', () => {
    countEl.textContent =  currentValue += 1;
})

// ВАРИАНТ ЧЕРЕЗ ФУНКЦИЮ
// const getCount = () => {
// const decrementBtn = document.querySelector('[data-action="decrement"]')
// const incrementBtn = document.querySelector('[data-action = increment]')
// const countEl = document.querySelector('#value')
// let currentValue = 0;

// decrementBtn.addEventListener('click', () => {
//     countEl.textContent =  currentValue -= 1;
// })

// incrementBtn.addEventListener('click', () => {
//     countEl.textContent =  currentValue += 1;
// })
// }

// getCount()


// ВАРИАНТ 3. Чуток поразвлекалась с замыканием

// const makeCount = v => {
//     const decrementBtn = document.querySelector('[data-action="decrement"]')
//     const incrementBtn = document.querySelector('[data-action = increment]')
//     const countEl = document.querySelector('#value')
//     let startValue = v;

//     return function (number) {
//     decrementBtn.addEventListener('click', () => {
//     countEl.textContent = startValue -= 1;
// })

//     incrementBtn.addEventListener('click', () => {
//     countEl.textContent = startValue += 1;
// })
//     }
// }

// const counter = makeCount(0);
// counter(1)
