function sumTo(n, summ = 0) {
  if (n === 0) {
    return summ;
  }else {
    return sumTo(n-1, summ + n)
  }
}

// function sumTo(n) {
//   let sum = 0;
//   while(n !== 0) {
//     sum += n;
//     n--;
//   }
//   return sum;
// }

// function sumTo(n) {
//   return (n+1)*n/2;
// }

console.log(sumTo(1))