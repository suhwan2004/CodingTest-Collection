/*
Input : int Array(nums)
Output : int(duplicate Number)
Contraints :
 - 1 <= n <= 10^5
 - nums.length == n + 1
 - 1 <= nums[i] <= n
 - All the integers in nums appear only once except for precisely one integer which appears two or more times. 
 - How can we prove that at least one duplicate number must exist in nums?
 - Can you solve the problem in linear runtime complexity?
 E : x
*/

/*
Bruth Force
Time : O(N)
Space : O(N)
ALGO : for
DS : hashSet
*/

var findDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return nums[i];
    else set.add(nums[i]);
  }
};
