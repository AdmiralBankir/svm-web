'use strict';


var galleryBtns =
  `
<button type="button" class="gallery__btn swiper-button-next swiper-button-white">
  <svg class="gallery__icon-arrow" width="24" height="24" viewBox="0 0 24 24">
    <use xlink:href="#icon-gallery-arrow"></use>
  </svg>
</button>

<button type="button" class="gallery__btn swiper-button-prev swiper-button-white">
  <svg class="gallery__icon-arrow" width="24" height="24" viewBox="0 0 24 24">
    <use xlink:href="#icon-gallery-arrow"></use>
  </svg>
</button>
`;

var galleryZoomBtn =
`
<button class="gallery__btn gallery__zoom-btn" type="button">
  <svg class="gallery__icon-zoom" width="24" height="24" viewBox="0 0 24 24">
    <use xlink:href="#icon-zoom"></use>
  </svg>
  <svg class="gallery__icon-zoom gallery__icon-zoom--min" width="24" height="24" viewBox="0 0 24 24">
    <use xlink:href="#icon-zoom-min"></use>
  </svg>
</button>
`;

var createGallery = (images, popUp) => {
  var gallery = document.createElement('div');
  gallery.classList.add('gallery');

  var galleryTop = document.createElement('div');
  var galleryThumbs = document.createElement('div');

  galleryTop.classList.add('swiper-container');
  galleryThumbs.classList.add('swiper-container');

  galleryTop.classList.add('gallery-top');
  galleryThumbs.classList.add('gallery-thumbs');

  var wrapper = document.createElement('div');
  wrapper.classList.add('swiper-wrapper');

  images.forEach((img) => {
    var slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.style = 'background-image:url(./img/' + `${img}` + '.jpg)';
    wrapper.append(slide);
  });

  galleryTop.append(wrapper);
  galleryTop.insertAdjacentHTML('beforeend', galleryBtns);

  gallery.append(galleryTop);

  galleryThumbs.append(wrapper.cloneNode(true));

  gallery.append(galleryThumbs);

  gallery.insertAdjacentHTML('beforeend', galleryZoomBtn);

  var zoomBtn = gallery.querySelector('.gallery__zoom-btn');

  zoomBtn.addEventListener('click', () => {
    gallery.classList.toggle('gallery--zoomed');
    gallery.parentNode.classList.toggle('popup-item__content--zoomed');

    popUp.link.classList.toggle('popup-item--zoomed');
    popUp.swiperGallery.galleryThumbs.update();
    popUp.swiperGallery.galleryTop.update();
  });

  return gallery;
};

var initSwiperGallery = (numPerView) => {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: numPerView,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  return {
    galleryThumbs,
    galleryTop
  }
};
