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

// window.addEventListener('keydown', keydownEscape);

// function keydownEscape(event) {
//   if (event.code === 'Escape') {
//     instance.close();
//   }
// }

// function handlerClickImg(event) {
//   if (event.target === galleryRef) {
//     return;
//   }
//   event.preventDefault();
//   const target = event.target;
//   const imageSource = target.dataset.source;
//   const instance = basicLightbox.create(
//     `<img src="${imageSource}" width="1400" height="900">`
//     // {
//     //   onShow: keydownEscape,
//     //   onClose: keydownEscape,
//     // }
//   );
//   instance.show();
//   if (instance.show()) {
//     function keydownEscape(event) {
//       if (event.code === 'Escape') {
//         instance.close();
//       }
//     }
//   }
// }

// const modalOn = document.querySelector('.basicLightbox--visible');

window.addEventListener('keydown', keydownEscape);

function keydownEscape(event) {
  const instance = basicLightbox.get();
  if (event.code === 'Escape' && instance) {
    instance.close();
  }
}

function handlerClickImg(event) {
  if (event.target === galleryRef) {
    return;
  }
  event.preventDefault();
  const target = event.target;
  const imageSource = target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imageSource}" width="1400" height="900">`
  );
  instance.show();
  window.addEventListener('keydown', keydownEscape);
}
