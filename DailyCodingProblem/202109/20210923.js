/*
Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/
function solution(arr) {
  let last = 0;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    // O(n);
    if (
      (i == arr.length - 1 && arr[i] > 0) ||
      (arr[i + 1] != arr[i] + 1 && arr[i] > 0)
    ) {
      min = Math.min(min, arr[i] + 1);
      last = arr[i] + 1;
    }
  }
  return min;
}
console.log(solution([3, 4, -1, 1]));
