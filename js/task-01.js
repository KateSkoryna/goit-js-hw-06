const allCategories = document.querySelector('ul').children;
console.log(`Number of categoris ${allCategories.length}`)

const allInfoEl = [...allCategories].forEach(item => {
    const itemTitle = item.querySelector('h2').textContent;
    const innerItemsList = item.querySelectorAll('li').length;
    console.log(`Category: ${itemTitle}\nElements: ${innerItemsList}`);
})