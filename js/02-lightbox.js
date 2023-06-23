// import { galleryItems } from './gallery-items.js';

// const galleryRef = document.querySelector('.gallery');

// const createGalleryItemsMarkup = ({ preview, original, description }) => {
//   return `
//     <li class="gallery__item">
//       <a class="gallery__link" href="${original}">
//         <img class="gallery__image" src="${preview}" alt="${description}" />
//       </a>
//     </li>
//   `;
// };

// const galleryItemsMarkup = galleryItems
//   .map(item => createGalleryItemsMarkup(item))
//   .join('');

// galleryRef.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'title',
// });

// function handlerClickImg(event) {
//   if (event.target === galleryRef) {
//     return;
//   }
//   event.preventDefault();
//   const target = event.target;
//   const imageSource = target.dataset.source;

//   lightbox.open([{ src: imageSource }]);
// }

// galleryRef.addEventListener('click', handlerClickImg);

// ============

import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const createGalleryItemsMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>
    </li>
  `;
};

const galleryItemsMarkup = galleryItems
  .map(item => createGalleryItemsMarkup(item))
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'title',
});

function handlerClickImg(event) {
  if (event.target === galleryRef) {
    return;
  }
  event.preventDefault();
  const target = event.target;
  const imageSource = target.dataset.source;
  const altText = target.getAttribute('alt');

  lightbox.open([{ src: imageSource, caption: altText }]);
}

galleryRef.addEventListener('click', handlerClickImg);

// ==========
