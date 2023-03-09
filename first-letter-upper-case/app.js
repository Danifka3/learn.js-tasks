function ucFirst(str) {
    let subStr = str.slice(0, 1);
    return (subStr.toUpperCase() + str.slice(1));
}

alert(ucFirst('вася'));