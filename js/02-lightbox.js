import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
//  ==========================MARKUP CREACTION==============================
const markup = galleryItems
  .map((item) => {
    return `<a class="gallery__item" href = "${item.original}" data-capture="${item.description}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></a>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

// //  ==========================GALLERY==============================

const lightboxGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
