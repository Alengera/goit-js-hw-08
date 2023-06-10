// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
function galleryMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join("");
}

const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = galleryMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionPosition: "bottom",
});
console.log(galleryItems);
