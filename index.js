// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");

console.log(galleryItems)
function galleryMarkUp(items) {
  console.log(items)
  const markup = items.map(({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `;
}).join('');

  gallery.innerHTML = markup;
}

galleryMarkUp(galleryItems);

new SimpleLightbox(".gallery a", {
  spinner: true,
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});