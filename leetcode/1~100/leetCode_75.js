/*
Input : int Array(nums)
Output : int Array(Sorted nums)
Contraints : 
 - n == nums.length
 - 1 <= n <= 300
 - nums[i] is either 0, 1, or 2.
 - Follow up: Could you come up with a one-pass algorithm using only constant extra space?
E : x
*/

/*
Bruth Force
Time : O(N)
Space : O(N)
ALGO : for
DS : Array
*/

var sortColors = function (nums) {
  let map = new Map();
  let res = [];
  let point = 0;
  for (let i of nums) {
    map.set(i, map.get(i) + 1 || 1);
  }
  for (let i = 0; i <= 2; i++) {
    if (map.has(i)) {
      for (let j = point; j < point + map.get(i); j++) {
        nums[j] = i;
      }
      point += map.get(i);
    }
  }
};

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : for
DS : Array
*/

var sortColors = function (nums) {
  if (nums.length === 1) return nums;
  let zero = 0,
    one = 0,
    two = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zero++;
    else if (nums[i] === 1) one++;
    else two++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (zero !== 0) {
      zero--;
      nums[i] = 0;
    } else if (one !== 0) {
      one--;
      nums[i] = 1;
    } else nums[i] = 2;
  }
  return nums;
};
