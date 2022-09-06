/*
https://leetcode.com/problems/reverse-integer/
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

start : 2022.09.06 15:22 ~ 15:36

Input : number
output : reverse Input Number
Contraints : -2^31 <= x <= 2^31 - 1
Edge Case : x

Bruth force Solution
Time : O(N) => N === degree of x
Space : O(N)

1. input으로 받은 숫자의 절댓값을 reverse 한다.
2. 만약, 숫자가 -2^31보다 작고, 2^31 - 1 보다 크다면 0을 반환한다.
3. 기존 input이 양수면 그대로 반환, 음수라면 -를 붙여 반환한다.
*/

var reverseBruthForce = function (x) {
  const reverseNum = +Math.abs(x).toString().split("").reverse().join("");
  if (reverseNum < -Math.pow(2, 31) || reverseNum > Math.pow(2, 31) - 1)
    return 0;
  return x > 0 ? reverseNum : -reverseNum;
};

/*
Optimal Solution
Time : 위와 동일
space : O(1)
*/
var reverseOptimal = function (x) {
  let neg = x < 0,
    n = 0;
  if (neg) {
    x = x * -1;
  }
  while (x > 0) {
    n = n * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return n > Math.pow(2, 31) - 1 ? 0 : neg ? -1 * n : n;
};
