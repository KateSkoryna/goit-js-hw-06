const counterEl = document.querySelectorAll('#counter button');
const decrementBtn = counterEl[0];
const encrement = counterEl[1];
const countEl = document.querySelector('#value')
let currentValue = 0;

decrementBtn.addEventListener('click', () => {
    currentValue -= 1;
    countEl.textContent = currentValue;
})

encrement.addEventListener('click', () => {
    currentValue += 1;
    countEl.textContent = currentValue;
})

// ВАРИАНТ 2. Чуток поразвлекалась с замыканием

// const counterRef = v => {
//     let startValue = v;

//     return function (number) {
//         decrementBtn.addEventListener('click', () => {
//         startValue -= number;
//         countEl.textContent = startValue;
//         });
        
//         encrement.addEventListener('click', () => {
//         startValue += number;
//         countEl.textContent = startValue;
// })
//     }
// }

// const counter = counterRef(0);
// counter(1)
