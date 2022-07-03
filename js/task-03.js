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

const addImages = images => {
  const gallery = document.querySelector('.gallery')
  const itemImages = images.map(({ url, alt }) => `<li class ="item"><img class="item-img" src = ${url} alt = ${alt}></li>`).join('');
  gallery.insertAdjacentHTML("beforeend", itemImages);
  return gallery
}
const galleryEl = addImages(images);
console.log(galleryEl)


// ВТОРОЙ ВАРИАНТ 

// function createGallery(list) {
//   const listEl = document.querySelector(".gallery")
//   const markup = list.map(({ url, alt}) => `<li class ="item"><img class="item-img" src= ${url} alt= ${alt}></li>`).join('')
//   listEl.insertAdjacentHTML("beforeend", markup)
//   return listEl
// }
// console.log(createGallery(images))
