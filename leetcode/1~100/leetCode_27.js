/*
Input : int Array(nums), int(delete val in nums)
Output : int Array(modified nums)
Constraints : 
 - 0 <= nums.length <= 100
 - 0 <= nums[i] <= 50
 - 0 <= val <= 100
 - Do not allocate extra space for another array. 
E : x

Optimal Solution
Time : O(N)
Space : O(1)
ALGO : Array
DS : for
*/

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};
