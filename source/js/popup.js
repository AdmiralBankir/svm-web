'use strict';

var BANYA_INFOS = [{
  id: 'standart-6',
  title: 'Полноценный вариант для комфортного отдыха!',
  advantages: [
    '3 отделения: раздевалка 2х2м, мойка1,5х2м, парилка 2х2м.',
    'Отделка: раздевалка, мойка - сосна "АВ", парилка - липа "А".',
    'Печь - Термофор Саяны-мини с баком для воды 53л. Наружная дверь, окна - профиль ПВХ.',
    'Внутренние двери - стекло 8 мм.',
    'Наружная отделка — имитация бруса "В", Tikkurila VALTI COLOR.'
  ],
  images: [
    'banya6-1@1x', 'banya6-2@1x', 'banya6-3@1x',
    'banya6-4@1x', 'banya6-5@1x', 'banya6-6@1x',
    'banya6-7@1x', 'banya6-8@1x', 'banya6-9@1x',
    'banya6-10@1x', 'banya6-11@1x', 'banya6-12@1x',
    'banya6-13@1x', 'banya6-14@1x', 'banya6-15@1x',
    'banya6-16@1x','banya6-17@1x'
  ]
},
{
  id: 'standart-5',
  title: 'Разумный компромисс между 4-х и 6-ти метровой баней.',
  advantages: [
    '2 отделения: раздевалка 2х2м и парилка 2х2м',
    'Отделка: раздевалка, мойка - сосна "АВ", парилка - липа "А".',
    'Печь - Термофор Саяны-мини с баком для воды 53л.',
    'Наружная дверь, окно - профиль ПВХ.',
    'Внутренние двери - стекло 8 мм.',
    'Наружная отделка — имитация бруса "В", Tikkurila VALTI COLOR.'
  ],
  images: [
    'banya5-1@1x', 'banya5-2@1x', 'banya5-3@1x',
    'banya5-4@1x', 'banya5-5@1x', 'banya5-6@1x',
    'banya5-7@1x', 'banya5-8@1x', 'banya5-9@1x',
    'banya5-10@1x', 'banya5-11@1x'
  ]
},
{
  id: 'standart-4',
  title: 'Займет немного места на Вашем участке, но несомненно украсит его. А добротная внутренняя отделка сделает Ваше пребывание в бане комфортным и приятным.',
  advantages: [
    '2 отделения: раздевалка 1,5х2м и парилка 2х2м.',
    'Отделка: раздевалка, мойка - сосна "АВ", парилка - липа "А".',
    'Печь - Термофор Саяны-мини с баком для воды 53л.',
    'Наружная дверь, окно - профиль ПВХ.',
    'Внутренние двери - стекло 8 мм.',
    'Наружная отделка — имитация бруса "В", Tikkurila VALTI COLOR.'
  ],
  images: [
    'banya4-1@1x', 'banya4-2@1x', 'banya4-3@1x',
    'banya4-4@1x', 'banya4-5@1x', 'banya4-6@1x',
    'banya4-7@1x', 'banya4-8@1x', 'banya4-9@1x'
  ]
},
{
  id: 'econom-4',
  title: 'Баня, хоть и небольшая, но в ней есть где и раздеться и попариться и помыться. Самый недорогой вариант бани прекрасно подойдет для ограниченного бюджета или при отсутствии необходимости в большой дорогостоящей бане.',
  advantages: [
    '2 отделения: раздевалка 1,5х2,0м и парилка 2х2м.Печь - Термофор Саяны-мини с баком для воды 53л.',
    'Двери и окно - деревянные.',
    'Внутренняя отделка - сосна "ВС"',
    'Наружная отделка — неотделанная сосновая вагонка "ВС"'
  ],
  images: [
    'banya4E-1@1x', 'banya4E-2@1x', 'banya4E-3@1x',
    'banya4E-4@1x', 'banya4E-5@1x', 'banya4E-6@1x',
    'banya4E-7@1x', 'banya4E-8@1x'
  ]
},
{
  id: 'econom-5',
  title: 'Отличается от 4-х метровой бани большей раздевалкой. Здесь уже можно поставить стол и 2 лавки.',
  advantages: [
    '2 отделения: раздевалка 2х2м и парилка 2х2м.',
    'Печь - Термофор Саяны-мини с баком для воды 53л.',
    'Двери и окна - деревянные.',
    'Внутренняя отделка - сосна "ВС".',
    'Наружная отделка — неотделанная сосновая вагонка "ВС".'
  ],
  images: [
    'banya5E-1@1x', 'banya5E-2@1x', 'banya5E-3@1x',
    'banya5E-4@1x', 'banya5E-5@1x', 'banya5E-6@1x',
    'banya5E-7@1x'
  ]
},
{
  id: 'econom-6',
  title: 'Здесь можно свободно и попариться и помыться и отдохнуть в небольшой компании',
  advantages: [
    '3 отделения: раздевалка 2х2м, мойка1,5х2м, парилка 2х2м.',
    'Внутренняя отделка: сосна "ВС"',
    'Наружная отделка: неотделанная сосновая вагонка "ВС"',
    'Печь - Термофор Саяны-мини с баком для воды 53л.',
    'Двери и окна - деревянные.'
  ],
  images: [
    'banya6E-1@1x', 'banya6E-2@1x', 'banya6E-3@1x',
    'banya6E-4@1x', 'banya6E-5@1x', 'banya6E-6@1x',
    'banya6E-7@1x', 'banya6E-8@1x', 'banya6E-9@1x',
    'banya6E-10@1x', 'banya6E-11@1x'
  ]
},
{
  id: 'summerhouse',
  title: 'В будни беседка может быть использована как зона уединения и отдыха,- на ней прекрасно расположится стол и пара кресел. А в праздники она пригодится для веселых и шумных застолий, — 10-12 человек здесь свободно разместятся',
  advantages: [
    'Крепкий пол',
    'Металлический каркас',
    'Качественная финская краска',
    'Металлический каркас',
    'Отделка: финкраска, масловоск'
  ],
  images: [
    'summerhouse-1@1x', 'summerhouse-2@1x', 'summerhouse-3@1x',
    'summerhouse-4@1x', 'summerhouse-5@1x', 'summerhouse-6@1x',
    'summerhouse-7@1x', 'summerhouse-8@1x', 'summerhouse-9@1x',
    'summerhouse-10@1x', 'summerhouse-11@1x', 'summerhouse-12@1x'
  ]
},
{
  id: 'chicken',
  title: 'Есть обычная версия и зимняя с утеплителем. Изготавливаем курятники под заказ любых размеров и комплектаций. Курятник имеет 4 дверцы, лестницу, 3 гнезда и 2 насеста.',
  advantages: [
    'Габариты 2,3х1,27х1,82 м.',
    'Жилая зона 1,1х1х1,15 м.',
    'Зона выгула 2х1 м.'
  ],
  images: [
    'chicken-1@1x', 'chicken-2@1x', 'chicken-3@1x',
    'chicken-4@1x', 'chicken-5@1x', 'chicken-6@1x'
  ]
},
{
  id: 'wine',
  title: 'Прекрасный подарок к любой дате! Подставка обязательно привлечет внимание Ваших гостей, а копилка несомненно украсит интерьер кухни или гостиной',
  advantages: [
    'Оригинальная подставка под бутылку',
    'Копилки-витрина для пробок'
  ],
  images: [
    'wine-1@1x', 'wine-2@1x', 'wine-3@1x'
  ]
},
{
  id: 'watch',
  title: 'Отлично подойдёт, как подарок для ваших близких и прекрасно украсит ваш интерьер',
  advantages: [
    'Размеры: 160х70х200.',
    'Материал: Сосна, масловоск.'
  ],
  images: [
    'watch-1@1x', 'watch-2@1x'
  ]
}
];

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
