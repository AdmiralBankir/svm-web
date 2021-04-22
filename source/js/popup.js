'use strict';

var BANYA_INFOS;

function getItemsList() {
  fetch('/json/items.json')
    .then(response => response.json())
    .then(json => {
      BANYA_INFOS = json;
    })
}

getItemsList();

class Popup {
  constructor() {
    this.link = document.querySelector('.popup-item'),
      this.content = this.link.querySelector('.popup-item__content'),
      this.body = document.querySelector('body'),
      this.overlay = document.querySelector('.overlay'),
      this.offerBtn = this.link.querySelector('.popup__offer');
  }

  open(item) {
    this.link.classList.add('popup-item--active', 'popup--active');
    this.body.classList.add('body--overflow');
    this.overlay.classList.add('overlay--active');

    var id = item.getAttribute('id-product');
    var itemInfo = item.querySelector('.products__info').cloneNode(true);

    this.content.insertAdjacentHTML('afterbegin', itemInfo.innerHTML);

    this.insertContent(id);
    this.offerBtn.setAttribute('id-product', id);
  }

  close() {
    this.link.classList.remove('popup-item--active', 'popup--active');
    this.body.classList.remove('body--overflow');
    this.overlay.classList.remove('overlay--active');
    this.content.classList.remove('popup-item__content--zoomed');

    this.swiperGallery.galleryThumbs.destroy();
    this.swiperGallery.galleryTop.destroy();

    this.removeContent();
  }

  insertContent(id) {
    var info = BANYA_INFOS.find((item) => {
      return item.id === id;
    });

    var images = info.images;
    this.content.querySelector('.products__description').innerHTML = `${info.title}`;

    var advantagesList = document.createElement('ul');

    advantagesList.classList.add('popup-item__advantages');

    info.advantages.forEach((advantage) => {
      var advantageItem = document.createElement('li');
      advantageItem.innerHTML = advantage;
      advantagesList.append(advantageItem);
    });

    var gallery = createGallery(images, this);

    this.content.prepend(gallery);
    this.content.append(advantagesList);

    var slidesPerView = images.length;

    if (slidesPerView > 6) {
      slidesPerView = 6;
    }

    this.swiperGallery = initSwiperGallery(slidesPerView);
  }

  removeContent() {
    this.content.innerHTML = '';
  }
};

var popup = new Popup();

var closeBtn = popup.link.querySelector('.popup-item__cls-btn');

function onItemClick(item) {
  popup.open(item);
};

document.addEventListener('click', (evt) => {
  var item = evt.target.closest('.products__item');

  if (!item) return;

  onItemClick(item);
});

closeBtn.addEventListener('click', () => popup.close());
