function printNumbers(from, to) {
  let printnumbersID = setInterval(() => {
    if (from <= to) {
      console.log(from++);
    }else {
      clearInterval(printnumbersID);
    }
  }, 1000);
}

function printNumbers(from, to) {
  setTimeout(function timer() {
    if (from <= to) {
      console.log(from++);
      setTimeout(timer, 1000)
    }
  });
}

let a = 10
let b = 15
printNumbers(a, b);
setTimeout(() => console.log(a), 6000)


