import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const createGallatyElements = galleryItems.map((item) => {
  return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="" title="${item.description}"/>
</a>`
}).join('');

gallery.insertAdjacentHTML('beforeend', createGallatyElements)

	var lightbox = new SimpleLightbox('.gallery a', {
		captionType: 'attr',
		captionsData: 'title',
		captionPosition: 'bottom',
		captionDelay: 250
	});