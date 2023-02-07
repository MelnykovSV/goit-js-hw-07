import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
//  ==========================MARKUP CREACTION==============================
const markup = galleryItems
  .map((ele) => {
    return `<div class="gallery__item"><a class="gallery__link" href = "${ele.original}"><img class="gallery__image" src="${ele.preview}" alt="${ele.description}" data-source="${ele.original}"></a></div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

//  ==========================EVENTS HANDLING==============================

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  //  modal opening/closing

  const instance = basicLightbox.create(
    `
      <div>
          <div class="modal">
            <img src="${e.target.dataset.source}" alt="${e.target.alt}" class="modal-img">
          </div>
          </div>
      `,
    {
      onClose: () => {
        document.removeEventListener("keydown", galleryKeyDownHandler);
      },
      onShow: () => {
        document.addEventListener("keydown", galleryKeyDownHandler);
      },
    }
  );
  instance.show();

  //  modal closing with ESC

  function galleryKeyDownHandler(e) {
    if (e.code === "Escape") {
      instance.close();
      console.log("im working");
    }
  }
});
