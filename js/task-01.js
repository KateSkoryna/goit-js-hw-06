const allCategories = document.querySelector('#categories');
const childrenList = allCategories.children;
console.log(`Number of categoris ${childrenList.length}`)

const getInfo = (list) => [...list].forEach(child => {
    const itemTitle = child.querySelector('h2').textContent;
    const innerItemsList = child.querySelectorAll('li').length;
    console.log(`Category: ${itemTitle}\nElements: ${innerItemsList}`);
})

getInfo(childrenList);

