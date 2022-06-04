/*
Time : O(NlogN)
Space : O(1)
*/
var twoSumLessThanK = function (nums, k) {
  nums.sort((a, b) => a - b);
  let l = 0,
    r = nums.length - 1;
  let max = -Infinity;
  while (l < r) {
    let sum = nums[l] + nums[r];
    if (sum >= k) {
      r--;
    } else {
      max = Math.max(max, sum);
      l++;
    }
  }
  return max === -Infinity ? -1 : max;
};
