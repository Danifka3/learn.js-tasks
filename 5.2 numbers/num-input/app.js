function readNumber() {
  let inp = prompt('Введите число:', '0');
  if (inp === '' || inp === null) {
    return null;
  }else if (+inp || inp === '0') {
    return inp;
  }else {
    return readNumber();
  }
}

alert(readNumber());