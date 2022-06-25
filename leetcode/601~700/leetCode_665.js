/*
Input : Int Array(nums)
Output : boolean(return true  if it could become non-decreasing by modifying at most one element.)
constrains : 
  - n == nums.length
  - 1 <= n <= 10^4
  - -10^5 <= nums[i] <= 10^5
edge case : if (nums.length === 1) return true;
*/

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : Greedy
DS : Array
*/
var checkPossibility = function (nums) {
  if (nums.length === 1) return true;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      if (count++ || (nums[i - 1] > nums[i + 1] && nums[i - 2] > nums[i]))
        return false;
    }
  }
  return true;
};
