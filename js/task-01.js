const taskOneEl = document.querySelectorAll(`.item`);
console.log('Number of categories: ', taskOneEl.length);

taskOneEl.forEach(function (item) {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
