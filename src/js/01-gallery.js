import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map((ele, i, arr) => {
    return `<div class="gallery__item"><a class="gallery__link"><img class="gallery__image" src="${ele.preview}" alt="${ele.description}"></a></div>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', e => {
  console.log(
    galleryItems.find(ele => {
      return ele.preview === e.target.src;
    }).original
  );
});
// const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

instance.show();
