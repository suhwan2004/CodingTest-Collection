/*
Input : int Array(nums)
Output : int(single Number in nums)
Contraints : 
 - 1 <= nums.length <= 3 * 104
 - -3 * 104 <= nums[i] <= 3 * 104
 - Each element in the array appears twice except for one element which appears only once.
 - a linear runtime complexity and use only constant extra space.
E : x
*/

/*
Optimal Solution 

Time : O(N)
Space : O(1)
ALGO : for
DS : Array
*/

var singleNumber = function (nums) {
  return nums.reduce((cur, prev) => prev ^ cur);
};
