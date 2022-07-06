const input = document.querySelector('input[type="range"]');
const text = document.querySelector('#text');

input.addEventListener('input', () => {
    text.style.fontSize = `${input.value}px`
})