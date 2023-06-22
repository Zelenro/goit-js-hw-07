import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', handlerClickImg);

function handlerClickImg(event) {
  console.log(event.target);
}

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
        //   data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryItemsMarkup = galleryItems
  .map(item => createGalleryItemMarkup(item))
  .join('');

galleryRef.innerHTML = galleryItemsMarkup;
