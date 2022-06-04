/*
Input : int Array(nums)
Output : int(the maximum amount of money you can rob tonight without alerting the police)
Contraints : 
 - 1 <= nums.length <= 100
 - 0 <= nums[i] <= 400
E : 
 - if (nums.length === 1) return nums[0];
 - if (nums.length === 2) return Math.max(nums[0], nums[1]);
*/

/*
Time : O(N)
Space : O(1)
ALGO : DP , for
DS : Array

*/

var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  nums[0] = nums[0];
  nums[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1], nums[i - 2] + nums[i]);
  }
  return nums[nums.length - 1];
};
