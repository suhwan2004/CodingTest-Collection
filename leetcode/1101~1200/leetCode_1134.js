/*
Time : O(N), N === digit of n
Space : O(N)
*/

var isArmstrong = function (n) {
  let arr = String(n)
    .split("")
    .map((cur) => Number(cur));
  if (arr.length === 1) return true;

  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    sum += Math.pow(arr[i], arr.length);
    if (sum > n) return false;
  }

  return sum === n ? true : false;
};

/*
Time : O(N), N === digit of n
Space : O(1)
*/
var isArmstrong = function (n) {
  let digit = String(n).length;
  if (digit === 1) return true;

  let curVal = 0;

  let originNum = n;
  while (n !== 0 && curVal <= originNum) {
    curVal += Math.pow(n % 10, digit);
    n = Math.floor(n / 10);
  }

  return n === 0 && curVal === originNum ? true : false;
};
