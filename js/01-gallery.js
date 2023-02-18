import { galleryItems } from './gallery-items.js';
// Change code below this line
/* console.log(galleryItems); */

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const gallery = document.querySelector('.gallery')

const preview = galleryItems.map((item) => item.preview).join(' ');
const original = galleryItems.map((item) => item.original).join(' ');
const description = galleryItems.map((item) => item.description).join(' ');

galleryItems.forEach(image => {
  const item = `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}" target="_self" rel="noreferrer noopener">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`;
  gallery.innerHTML += item;
})

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
//    Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
//    Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.