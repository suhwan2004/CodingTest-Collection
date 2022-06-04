/*
Input : int(target), int Array(nums)
Output : int(the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target)
Contraints : 
 - 1 <= target <= 109
 - 1 <= nums.length <= 105
 - 1 <= nums[i] <= 105
E : x
*/

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : two pointer
DS : Array
*/

var minSubArrayLen = function (target, nums) {
  let l = 0,
    r = 0,
    sum = 0;
  let min = Infinity;
  while (r < nums.length) {
    sum += nums[r];
    while (sum - nums[l] >= target) {
      sum -= nums[l];
      l++;
    }
    if (sum >= target) min = Math.min(min, r - l + 1);
    r++;
  }
  return min === Infinity ? 0 : min;
};
