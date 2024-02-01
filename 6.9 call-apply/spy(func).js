function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

// function spy(func) {
//   func.calls = [];
//
//   return function(a, b) {
//     func.calls.push(a, b)
//     return func.call(this, a, b);
//   }
// }


function spy(func) {

  function wrapper() {
    wrapper.calls.push(arguments);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}


work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + [].join.call(args) ); // "call:1,2", "call:4,5"
}