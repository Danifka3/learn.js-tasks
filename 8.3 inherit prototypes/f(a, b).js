'use strict';

Function.prototype.defer = function(ms) {
  const func = this;
  function result() {
    return setTimeout(() => func.apply(this, arguments), ms)
  }
  return result
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.