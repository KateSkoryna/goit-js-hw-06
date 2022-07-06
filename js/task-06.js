const input = document.querySelector('input');

const toggleClass = (el, addClass, removeClass) => {
    el.classList.add(addClass)
    el.classList.remove(removeClass);
    
}

const validateInput = () => {
    const trimStrLength = input.value.trim().length;
    const lengthNumber = parseInt(input.getAttribute("data-length"));
    trimStrLength === lengthNumber ? toggleClass(input, 'valid', 'invalid') : toggleClass(input, 'invalid', 'valid')
}

input.addEventListener("blur", validateInput);