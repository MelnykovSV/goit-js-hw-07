import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
//  ==========================MARKUP CREACTION==============================
const markup = galleryItems
  .map((ele) => {
    return `<a class="gallery__item" href = "${ele.original}" data-capture="${ele.description}"><img class="gallery__image" src="${ele.preview}" alt="${ele.description}"></a>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

// //  ==========================GALLERY==============================

var $gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
