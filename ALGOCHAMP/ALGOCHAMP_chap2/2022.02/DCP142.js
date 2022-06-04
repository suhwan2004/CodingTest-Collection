/*
This problem was asked by Facebook.

Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

Follow-up: Can you do this in linear time and constant space?
*/

/*
Bruth
Time : O(N)
Space : O(N)

Using Map
*/
function BruthForce(arr) {
  let map = new Map();
  let res = [];
  arr.map((val, idx) => map.set(val, map.get(val) + 1 || 1));
  for (let [k, v] of map) {
    if (v === 1) res.push(k);
  }
  return res;
}

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : ??

[2, 4, 6, 8, 10, 2, 6, 10]

Using XOR Operation

*/
function OptimalSolution(arr) {
  let xor = 0;
  for (let i of arr) {
    xor = xor ^ i;
  }

  xor = xor & -xor;
  res = [0, 0];
  for (let i of arr) {
    if (i & xor) res[0] = res[0] ^ i;
    else res[1] = res[1] ^ i;
  }

  return res;
}
console.log(BruthForce([2, 4, 6, 8, 10, 2, 6, 10]));
console.log(OptimalSolution([2, 4, 6, 8, 10, 2, 6, 10]));
