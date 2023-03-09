function checkSpam(str) {
    str = str.toLocaleLowerCase();
    return str.includes('viagra') || str.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));