/*
Input : int Array(nums)
Output : int(the majority element)
Contraints : 
 - n == nums.length
 - 1 <= n <= 5 * 104
 - -10^9 <= nums[i] <= 10^9
 - Follow-up: Could you solve the problem in linear time and in O(1) space?
E : x
*/

/*
Time : O(N)
Space : O(1)
ALGO : for
DS : Array
*/

var majorityElement = function (nums) {
  let count = 1;
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === cur) count++;
    else {
      count--;
      if (count < 0) {
        cur = nums[i];
        count = 1;
      }
    }
  }
  return cur;
};
