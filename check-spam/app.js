function checkSpam(str) {
    let lowerStr = str.toLocaleLowerCase();
    return lowerStr.includes('viagra') || str.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));