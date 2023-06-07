function fibonachi(n) {
  return Math.floor((((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n) /
      Math.sqrt(5));
}
console.log(fibonachi(7));