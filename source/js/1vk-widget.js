/* eslint-disable */

var isSetup = false;

function vkWidgetInsert(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://vk.com/js/api/openapi.js?168";
  fjs.parentNode.insertBefore(js, fjs);
};

function vkWidgetSetup() {
  if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post('vk_post_-190718443_50', -190718443, 50, 'IXPmry4ehO1hHbCNeql1CiQULL4', {
      width: 700
    })) setTimeout(arguments.callee, 50);
};

function getVkWidget() {
  if(!isSetup) {
    vkWidgetInsert(document, 'script', 'vk_openapi_js');
    vkWidgetSetup();
    isSetup = true;
  }
};

var options = {
  rootMargin: '0%',
  threshold: 0.1
}
var callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      getVkWidget();
    }
  });
};

var observer = new IntersectionObserver(callback, options);
var target = document.querySelector('.contacts__vk-widget');

if(target) {
  observer.observe(target);
}
