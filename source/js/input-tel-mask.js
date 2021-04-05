/*eslint-disable*/
'use strict';
(function () {
  window.addEventListener('DOMContentLoaded', function () {
    var setCursorPosition = function (pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {

        var range = elem.createTextRange();

        range.collapse(true);

        range.moveEnd('character', pos);

        range.moveStart('character', pos);

        range.select();
      }
    };

    var mask = function(event) {

      var matrix = '+7(___)___-__-__';

      var i = 0;

      var def = matrix.replace(/\D/g, '');

      var val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
        if (this.value.length === 2) {
          this.value = '';
        }

      } else {
        setCursorPosition(this.value.length, this);
      }

    };

    var inputs = document.querySelectorAll('form input[type=tel]');

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', mask, false);
      inputs[i].addEventListener('focus', mask, false);
      inputs[i].addEventListener('blur', mask, false);
    }
  });

})();
