//https://leetcode.com/problems/two-sum/

/*
13:55 ~ 14:05

Input : nums(int array), target(int)
Output : two Sum indexs set(int array)
Constraint
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
Edge Case : x
*/

/*
2pass solution

Time : O(2N), N === nums.length
Space : O(N)
DS : Array, hashMap
ALGO : for
*/

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let cur = target - nums[i];
    if (map.has(cur)) return [i, map.get(cur)];
  }
};

/*
1pass solution

Time : O(N), N === nums.length
Space : O(N)
DS : Array, hashMap
ALGO : for
*/
var twoSumOptimal = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let needValue = target - nums[i];

    if (map.has(needValue)) return [i, map.get(needValue)];
    map.set(nums[i], i);
  }
  return [];
};
