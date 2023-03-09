function sumInput() {
    let num = prompt('Введите число:', '0');
    let numMas = [];
    let sum = 0;
    while (num !== null && !isNaN(+num)) {
        numMas.push(+num);
        num = prompt('Введите число:', '0');
    }
    for (let elem of numMas) {
        sum += elem;
    }
    return sum;
}

alert(sumInput());