/*
Input : int Array(nums)
Output : int Array(nums after wiggle Sort)
Contraints : 
 - 1 <= nums.length <= 5 * 104
 - 0 <= nums[i] <= 104
 - It is guaranteed that there will be an answer for the given input nums.
 - Follow up: Could you solve the problem in O(n) time complexity?
 E : x
*/

/*
Bruth Force
Time : O(NLogN)
Space : O(1)
ALGO : Sort
DS : Array
*/
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length - 1; i += 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }
};

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : for
DS : Array
*/
var wiggleSortOptimal = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0 && nums[i] > nums[i + 1])
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    else if (i % 2 === 1 && nums[i] < nums[i + 1])
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }
};
