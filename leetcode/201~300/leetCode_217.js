/*
Input : int Array(nums) 
Output : boolean(return false if every element is distinct)
Contraints : 
 - 1 <= nums.length <= 10^5
 - -10^9 <= nums[i] <= 10^9
E : if (nums.length === 1) return false;
*/

/*
Optimal Solution
Time : O(N)
Space : O(N)
ALGO : for
DS : hashSet
*/

var containsDuplicate = function (nums) {
  if (nums.length === 1) return false;
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};
