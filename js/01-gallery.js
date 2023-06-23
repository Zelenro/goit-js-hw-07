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
  const target = event.target;
  const imageSource = target.dataset.source;
  // console.log('url великого зображення:', imageSource);

  const instance = basicLightbox.create(imageSource);
  console.log(instance.show());

  if (!event.target.classList.contains('gallery__item')) {
    return;
  }
}
