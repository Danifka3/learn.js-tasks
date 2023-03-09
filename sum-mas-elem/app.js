function sumInput() {
    let num = prompt('Введите число:', '0');
    let numMas = [];

    while (num !== '' && num !== null && !isFinite(+num)) {
        numMas.push(+num);
        num = prompt('Введите число:', '0');
    }

    let sum = 0;
    for (let elem of numMas) {
        sum += elem;
    }
    return sum;
}

alert(sumInput());