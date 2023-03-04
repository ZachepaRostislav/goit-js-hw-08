import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  }).join('')
}

const markup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', markup);


const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
})