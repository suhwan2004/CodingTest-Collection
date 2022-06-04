/*
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
*/

const solution = (arr) => {
  let first = 0;
  let second = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    let sumVal = Math.max(arr[i] + second, first);
    second = first;
    first = sumVal;
  }

  return first;
};

console.log(solution([2, 4, 6, 2, 5]));
