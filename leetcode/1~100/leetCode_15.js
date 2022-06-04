/*
Input : int array(nums...)
Output : int 2d array(3 elements of sum === 0)
Constraints :
 - 0 <= nums.length <= 3000
 - -10^5 <= nums[i] <= 10^5
E : if (nums.length < 3) return [];

Time : O(N^2), (sort = O(NlogN), 2loop = O(N^2))
Space : O(N)
ALGO : two pointer, for
DS : Array
 */

var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) res.push([nums[i], nums[l], nums[r]]);

      if (sum > 0) {
        r--;
        while (nums[r + 1] === nums[r]) r--;
      } else {
        l++;
        while (nums[l - 1] === nums[l]) l++;
      }
    }
  }
  return res;
};
