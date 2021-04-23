'use strict';

var video = document.querySelector('.video');
var playBtn;
var VIDEO_ID = '6wh66N6JROQ';

var generateURL = (id) => {
  return 'https://youtu.be/' + id;
};

var createPicture = (id) => {
  return `<picture>
  <source type="image/webp" srcset="https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp">
  <img class="video__media" src="https://i.ytimg.com/vi/${id}/maxresdefault.jpg" alt="Видео на
    YouTube">
</picture>`;
};

var getYouTubeSvg = () => {
  return `<svg width="68" height="48" viewBox="0 0 68 48">
    <path class="video__button-shape"
      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z">
    </path>
    <path class="video__button-icon" d="M 45,24 27,14 27,34"></path>
  </svg>`;
};

var generateURLIframe = (id) => {
  var query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
};

var createIframe = (id) => {
  var iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURLIframe(id));

  return iframe;
};

var onVideoItemClick = (item) => {
  var link = video.querySelector('a');
  var button = video.querySelector('.video__button');
  var iframe = createIframe(VIDEO_ID);
  iframe.classList.add('video__iframe');

  link.remove();
  button.remove();
  item.prepend(iframe);
};

var createVideo = (id) => {
  var item = document.createElement('div');
  var link = document.createElement('a');
  var button = document.createElement('button');

  item.classList.add('video__item');
  link.setAttribute('href', generateURL(id));

  button.classList.add('video__button');
  button.setAttribute('type', 'button');
  button.setAttribute('aria-label', 'Смотреть видео на YouTube');

  link.insertAdjacentHTML('afterbegin', createPicture(id));
  button.insertAdjacentHTML('afterbegin', getYouTubeSvg());

  item.appendChild(link);
  item.appendChild(button);

  video.prepend(item);

  playBtn = video.querySelector('.video__button');

  playBtn.addEventListener('click', () => onVideoItemClick(item));
};


if(video) {
  createVideo(VIDEO_ID);
}

