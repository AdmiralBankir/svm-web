'use strict';

var headerNav = document.querySelector('.header__nav');
var headerMenuToggle = document.querySelector('.header__menu-btn');
var navLinkSubs = document.querySelectorAll('.header__nav-item--sub a');

var onMenuClick = function() {
  headerNav.classList.toggle('header__nav--active');
  headerMenuToggle.classList.toggle('menu-toggle--on');
};

var onSubLinkClick = (link) => {
  var subList = link.parentNode.querySelector('.header__nav-sub-list');
  link.classList.toggle('header__nav-link--active');

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
    headerMenuToggle.addEventListener('click', onMenuClick);
}

if (navLinkSubs) {
  navLinkSubs.forEach(link => {
    link.addEventListener('click', () => {
      onSubLinkClick(link);
    })
  })
}

document.addEventListener('click', (evt) => {
  var target = evt.target;
  var isHeaderNav = headerNav == target;
  console.log(isHeaderNav)
  var isMenuActive = headerNav.classList.contains('header__nav--active');
  if(!isHeaderNav && !isMenuActive) {
    onMenuClick();
  }
});
