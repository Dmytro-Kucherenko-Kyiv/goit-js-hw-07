import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const createGallatyElements = galleryItems.map((item) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
}).join('');

gallery.insertAdjacentHTML('beforeend', createGallatyElements)

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target === event.currentTarget)
  return
  
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src ="${event.target.getAttribute('data-source')}"/>
    </div>`
  ).show();
  
})

  document.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; in ES6+
    if (event.code === 'Escape' ) {
      document.querySelector('.basicLightbox').remove();
    }
  });