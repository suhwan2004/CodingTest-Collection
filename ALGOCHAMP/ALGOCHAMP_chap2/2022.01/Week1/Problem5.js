/*
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
Output: 2

Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7

---------



start : 11:15 ~ 29
*/
/*bruthe force
DS : array
ALGO : sorting, for
Time : O(nlogn)
Space : O(1)

function solution(input) {
  input.sort((a, b) => a - b);
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== i) return i;
  }
  return null;
}
*/

/*
second Optimal? solution
DS : array
ALGO : for
Time : O(2N) => O(N)
Space : O(N)

시간이 O(N)으로 줄었지만, 공간이 늘어난 케이스

function solution(input) {
  let arr = new Array(input.length);
  for (let i = 0; i < input.length; i++) {
    arr[input[i]] = input[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) return i;
  }
  return null;
}
*/

/*
Optimal Solution
흠... 위의 두 방법 말고 어케 풀어야 좋을까...
일단, 아래 방법으로도 생각해봤는데, 그냥 max값을 구하고 0부터 다 더한 뒤에 그거에 빼서 값을 구하는 방법
문제에서 명시했듯, 음수는 안되기 때문에 성립이 되는 방법임...
이렇게 쉽게 생각하는게 맞는건가.....? 모르겠다....

DS : Array
ALGO : for
Time : O(2N) => O(N)
Space : O(1)
*/
function solution(input) {
  let max = -Infinity;
  let sum = 0;
  let sum1 = 0;
  if (input.length === 0) return -1;

  for (let i = 0; i < input.length; i++) {
    max = Math.max(input[i], max);
    sum += input[i];
  }

  for (let i = 0; i <= max; i++) {
    sum1 += i;
  }
  return sum1 - sum;
}
console.log(solution([8, 3, 5, 2, 4, 6, 0, 1]));
