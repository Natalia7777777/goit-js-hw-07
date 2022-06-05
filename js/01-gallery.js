import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const cardsGalleryMarkup = createGalleryMurkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsGalleryMarkup);
gallery.addEventListener("click", onOpenModalGallery);


function createGalleryMurkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `;
    }).join('');
}

function onOpenModalGallery(event) {
    event.preventDefault();

    window.addEventListener('keydown', onEscKeyPress);

    const modalGallery = basicLightbox.create(
        `<img
            class="gallery__image"
            src="${event.target.dataset.source}"
            />`
    );
    modalGallery.show();

    function onEscKeyPress(event) {
        const isEscKey = event.code === 'Escape';

        if (isEscKey) {
            modalGallery.close();
        }
    }
}

