import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const createGalleryItemsMarkup = ({ preview, original, description }) => {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </li>`;
};
const galleryItemsMarkup = galleryItems
  .map(item => createGalleryItemsMarkup(item))
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
galleryRef.addEventListener('click', handlerClickImg);

function handlerClickImg(event) {
  event.preventDefault();
  if (event.target === galleryRef) {
    return;
  }
  const target = event.target;
  const imageSource = target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imageSource}" width="1400" height="900">`
  );
  instance.show();

  window.addEventListener('keydown', keydownEscape);
  const opts = {
    onShow: instance => {
      window.addEventListener('keydown', keydownEscape);
    },
    onClose: instance => {
      window.removeEventListener('keydown', keydownEscape);
    },
  };

  function keydownEscape(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}
