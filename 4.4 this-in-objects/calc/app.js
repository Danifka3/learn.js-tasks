let calculator = {
  read() {
    this.a = +prompt("Введите значение a:", 0);
    this.b = +prompt("Введите значение b:", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );