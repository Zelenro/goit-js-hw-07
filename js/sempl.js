const list = document.querySelector('.js-list');

list.insertAdjacentHTML('beforeend', createMarkupItems(cars));
list.addEventListener('click', handlerClickCar);

function handlerClickCar(evt) {
  const cardItem = evt.target.closest('.js-item');
  if (evt.target.classList.contains('js-add')) {
    const obj = findCarItem(cardItem);
    const instance = basicLightbox.create(createAddToCartMarkup(obj));
    instance.show();
  } else if (cardItem) {
    //evt.target !== evt.currentTarget
    const obj = findCarItem(cardItem);
    const instance = basicLightbox.create(createDetailInfoMarkup(obj));
    instance.show();
  }
}

function findCarItem(item) {
  const { id } = item.dataset;
  const currentCar = cars.find(({ id: carId }) => carId === Number(id));
  return currentCar;
}

function createAddToCartMarkup({ car, type, price } = {}) {
  return `<div class="modal">
    <h2>Add to cart item</h2>
    <h3>${car} ${type}</h3>
    <span>${price}</span>
  </div>`;
}

function createDetailInfoMarkup({
  id,
  car,
  type,
  price,
  img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
} = {}) {
  return `<div data-id="${id}" class="modal">
    <img src="${img}" alt="${car}" class="item-img"/>
    <h2>${car}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
    <button>Add</button>
  </div>`;
}

function createMarkupItems(arr) {
  return arr
    .map(
      ({ id, img, car }) => `
<li data-id="${id}" class="item js-item">
    <img src="${img}" alt="${car}" class="item-img"/>
    <h2>${car}</h2>
    <button type="button" class="js-add">Add</button>
</li>`
    )
    .join('');
}
