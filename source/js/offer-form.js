'use strict';

var ACCESS_TOKEN = '9qnog3j9gqncblcoz2c0p23t'; // Kendr

// var ACCESS_TOKEN = '9swrls8qun3f6i5y6ckzdlnl'; //admiral

var SUCCESS_MESSAGE = 'Заявка успешно отправлена! <br/> Мы скоро с вами свяжемся.';
var ERROR_MESSAGE = 'Заявка не отправлена. <br/> Повторите попытку позднее.'

function getMessage(type) {
  var text = '';
  var message = document.querySelector('#message').content.querySelector('.message').cloneNode(true);

  switch (type) {
    case 'success':
      text = SUCCESS_MESSAGE;
      break;
    case 'error':
      text = ERROR_MESSAGE;
      break;
  }

  message.querySelector('.message__text').innerHTML = text;
  message.classList.add(type);

  return message;

};

var isFormOpened = false;
var offerDesc = document.querySelector('.offer-form__offer-desc');
var offerBtn = document.querySelector('.popup__offer');
var offerPopUp = document.querySelector('.popup--form');
var popUpItem = document.querySelector('.popup-item');
var formClsBtn = offerPopUp.querySelector('.form-popup__cls-btn');

var formId = 'offerForm';

var sendButton = document.getElementById('formSend');
var offerForm = document.getElementById(formId);

var inputTel = offerForm.querySelector('.offer-form__form-phone input');
var inputName = offerForm.querySelector('.offer-form__form-name input');

function onFormOpen() {
  isFormOpened = !isFormOpened;

  if (isFormOpened) {
    var id = offerBtn.getAttribute('id-product');
    var item = document.querySelector(`.products__item[id-product=${id}]`);
    var desc = item.cloneNode(true);
    desc.querySelector('.products__description').remove();
    offerDesc.insertAdjacentHTML('afterbegin', desc.innerHTML);

    var msg = offerForm.querySelector('.message');

    if (msg) {
      msg.remove();
    }

  } else {
    offerDesc.innerHTML = '';
  }

  offerPopUp.classList.toggle('popup--active');
  popUpItem.classList.toggle('popup--inactive');

  inputTel.value = '';
  inputName.value = '';
};

offerBtn.addEventListener('click', onFormOpen);
formClsBtn.addEventListener('click', onFormOpen);

function isInputsValid() {
  return ((inputTel.value.trim() !== '') && (inputName.value.trim() !== ''));
};


var data = {
  'access_token': ACCESS_TOKEN,
  'subject': 'Заказ с сайта svm'
};

function onSuccess() {
  var successMessage = getMessage('success');
  offerForm.append(successMessage);
  sendButton.classList.remove('offer-form__btn--loading');
}

function onError(error) {
  var errorMessage = getMessage('error');
  offerForm.append(errorMessage);
  sendButton.classList.remove('offer-form__btn--loading');
}

function onFormSend() {
  if (isInputsValid()) {
    sendButton.classList.add('offer-form__btn--loading');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        onSuccess();
      } else
      if (request.readyState == 4) {
        onError(request.response);
      }
    };

    var productName = offerForm.querySelector('.products__name').innerText;

    var message = '';
    message = 'Имя: ' + inputName.value + '.' + ' ' + 'Телефон: ' + inputTel.value;

    data['subject'] += '.' + ' ' + productName;
    data['text'] = message;

    var params = toParams(data);

    request.open('POST', 'https://postmail.invotes.com/send', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    request.send(params);
  }
}

function toParams(data) {
  var form_data = [];
  for (var key in data) {
    form_data.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  }

  return form_data.join('&');
}

sendButton.addEventListener('click', onFormSend);

offerForm.addEventListener('submit', function (e) {
  e.preventDefault();
});
