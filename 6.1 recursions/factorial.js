function factorial(n, mult = 1) {
  if (n === 0) {
    return 1;
  }
  else if (n === 1) {
    return mult;
  }else {
    return factorial(n-1, mult * n)
  }
}

console.log(factorial(5))