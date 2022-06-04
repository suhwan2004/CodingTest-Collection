/*
Input : int Array(nums)
Output : x, modify nums in-place instead.
Contraints : 
 - 1 <= nums.length <= 104
 - -2^31 <= nums[i] <= 2^31 - 1
 - Follow up: Could you minimize the total number of operations done?
E : x
*/

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : two pointer
DS : Array
*/

var moveZeroes = function (nums) {
  let l = 0,
    r = 0;
  while (r < nums.length) {
    if (nums[l] !== 0) {
      l++;
      r = l;
    } else {
      if (nums[r] !== 0) [nums[l], nums[r]] = [nums[r], nums[l]];
      else r++;
    }
  }
};
