function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let elem of arr) {
    currentSum += elem;
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -2, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0