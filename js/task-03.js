const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery')
const addImages = images => images.map(({ url, alt }) => `<li class ="item"><img class="item-img" src = ${url} alt = ${alt}></li>`).join('');
const galleryEl = addImages(images);
gallery.insertAdjacentHTML("beforeend", galleryEl);
console.log(gallery)


// ВТОРОЙ ВАРИАНТ 

// const createGalery = list => {
//   const listEl = document.querySelector(".gallery")
//   const markup = list.map(({ url, alt}) => `<li class ="item"><img class="item-img" src= ${url} alt= ${alt}></li>`).join('')
//   listEl.insertAdjacentHTML("beforeend", markup)
//   return listEl
// }

// console.log(createGalary(images))
