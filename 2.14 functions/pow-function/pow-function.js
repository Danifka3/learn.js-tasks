function pow(x, n) {
    let result = x;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}