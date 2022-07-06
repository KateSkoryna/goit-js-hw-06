const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener("input", (event) => {
    input.value === "" ? nameOutput.textContent = 'Anonymous' : nameOutput.textContent = event.currentTarget.value.trim();
})