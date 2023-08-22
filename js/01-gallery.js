import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector('.gallery');


const galleryCreate = galleryItems.map(({ preview:small, original:large, description }) =>
 `
  <li class="gallery__item" >
        <a class="gallery__link" href="${large}">
          <img
          src="${small}" 
          data-photo-name="${large}"
          height="240"
          alt="${description}">
          </a>
        </img>
      </li>
`
).join(''); 

gallery.insertAdjacentHTML('afterbegin',galleryCreate);


const onClickPhoto = (evt) => {

    if (evt.target === evt.currentTarget) {
        return
    };
    
    evt.preventDefault();
    //?  ID фото по якому клікнули 
    const dataAttributeImage = evt.target.dataset.photoName;
    

    console.log(evt.target);
    console.log(dataAttributeImage);

    

    const instance = basicLightbox.create(`
    <div class="modal">
          <img
          src="${dataAttributeImage}" 
          alt="${galleryItems.description}">
        </img>
      
    </div>
    `)

instance.show()
};

gallery.addEventListener('click', onClickPhoto);