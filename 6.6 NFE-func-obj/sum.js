function sum(a) {
  let count = a;
  function prim(b) {
    count += b;
    return prim;
  }

  prim[Symbol.toPrimitive] = (hint) => {
    return count;
  }

  return prim;
}


console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);