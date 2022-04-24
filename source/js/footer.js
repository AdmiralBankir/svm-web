'use strict';

var footerYear = document.querySelector('.footer__year');

window.addEventListener('DOMContentLoaded', () => {
  if (!footerYear) {
    return;
  }
  var currentYear = new Date().getFullYear();
  footerYear.innerHTML = currentYear;
});
