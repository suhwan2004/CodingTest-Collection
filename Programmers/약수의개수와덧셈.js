/*
input : 2 int : left, right
output : left와 right 사이의 각 값을 더하는데, 그 값의 약수가 짝수면 +, 홀수면 -를 붙여 더함.
Constraints : 1 ≤ left ≤ right ≤ 1,000
Edge case : x

Bruth force
Time : O(n^2)
Space : O(1)
ALGO : for
DS : x
*/

function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) if (i % j === 0) count++;
    sum += count % 2 === 0 ? i : -i;
  }
  return sum;
}
