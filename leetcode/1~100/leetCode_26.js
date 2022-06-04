/*
Input : int Array(nums)
Output : x
Constraints : 
 - 1 <= nums.length <= 3 * 10^4
 - -100 <= nums[i] <= 100
 - nums is sorted in non-decreasing order.
E :
 - if (nums.length == 0) return [];
 - if (nums.length == 1) return nums;


 Optimal Solution
 Time : O(N)
 Space : O(1)
 DS : Array
 ALGO : for
*/

var removeDuplicates = function (nums) {
  if (nums.length == 0) return [];
  if (nums.length == 1) return nums;
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    let left = i + 1;
    if (nums[i] == nums[left]) {
      nums.splice(left, 1);
      length--;
      i--;
      continue;
    }
  }
};
