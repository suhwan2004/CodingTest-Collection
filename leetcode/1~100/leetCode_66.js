// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*
start
 - Bruth : 22:08 ~ 22:18
 
Optimal Solution
뒤에서부터 더하고 마지막에 자릿수를 넘으면 앞으로 넣기.
Time : O(2N) => O(N), N === digits.length
Space : O(N)
ALGO : for
DS : x
*/

var plusOne = function (digits) {
  let raisedVal = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const currentSum = digits[i] + raisedVal;
    digits[i] = currentSum % 10;
    raisedVal = Math.floor(currentSum / 10);
  }

  return raisedVal === 1 ? [1, ...digits] : digits;
};
