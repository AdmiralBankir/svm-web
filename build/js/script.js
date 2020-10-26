'use strict';

var headerNav = document.querySelector('.header__nav');
var navList = headerNav.querySelector('.header__nav-list');
var headerMenuToggle = document.querySelector('.header__menu-btn');
var navLinkSubs = document.querySelectorAll('.header__nav-item--sub a');

var onMenuClick = function () {
  headerNav.classList.toggle('header__nav--active');
  headerMenuToggle.classList.toggle('menu-toggle--on');
};

var onSubLinkClick = (link) => {
  var subItem = link.parentNode;
  var subList = subItem.querySelector('.header__nav-sub-list');

  link.classList.toggle('header__nav-link--active');
  subItem.classList.toggle('header__nav-item--active');

  var isOpened = link.classList.contains('header__nav-link--active');

  setTimeout(() => {
    if (isOpened) {
      subList.style.maxHeight = subList.scrollHeight + 'px';
    } else {
      subList.style.maxHeight = null;
    }
  }, 100);
};

if (headerNav && headerMenuToggle) {
  headerMenuToggle.addEventListener('click', (evt) => {
    evt.stopImmediatePropagation();
    onMenuClick();
  });
}

if (navLinkSubs) {
  navLinkSubs.forEach(link => {
    link.addEventListener('click', () => {
      onSubLinkClick(link);
    })
  })
}

document.addEventListener('click', (evt) => {
  var target = evt.target.closest('nav');
  var isHeaderNav = headerNav === target;
  var isActive = headerNav.classList.contains('header__nav--active');
  if (!isHeaderNav && isActive) {
    onMenuClick();
  }
});


var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

