/*
Input : int array
Output : int(the leftmost pivot index)
Contraints : 
 - 1 <= nums.length <= 10^4
 - -1000 <= nums[i] <= 1000
Edge case : x
*/

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : for, prefix sum
DS : x
*/

var pivotIndex = function (nums) {
  let sum = 0;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    let right = sum - left - nums[i];
    if (left === right) return i;
    left += nums[i];
  }
  return -1;
};
