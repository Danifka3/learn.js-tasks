function fun() {
  console.log('Hello!');
}

function debounce(f, ms) {
  function result() {
    return f.apply(arguments);
  }
  debounce.time = new Date(0);

  debounce.callTime = new Date(0);

  if(debounce.callTime - debounce.time >= ms) {
    debounce.time = debounce.callTime;
  }
}

let f = debounce(fun, 1000);


f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)