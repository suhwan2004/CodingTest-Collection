/*
가장 짧은 sort 되지 않은 부분 배열의 길이를 찾으면 되는 문제.

first solution
ALGO : two-pointer
*/

var findUnsortedSubarray = function (nums) {
  let left,
    right,
    largest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    largest = Math.max(largest, nums[i]);
    if (nums[i] < largest) {
      if (left === undefined) left = i - 1;
      while (left >= 0 && nums[i] < nums[left]) {
        left--;
      }
      right = i;
    }
  }
  if (left === undefined && right === undefined) return 0;
  else return right - left;
};
