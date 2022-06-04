/*
Input : int Array(nums), int(target, )
Output : int(index of target...)
Contraints : 
 - 1 <= nums.length <= 5000
 - -10^4 <= nums[i] <= 10^4
 - All values of nums are unique.
 - nums is an ascending array that is possibly rotated.
 - -10^4 <= target <= 10^4
 - You must write an algorithm with O(log n) runtime complexity.
E : x


Optimal Solution
Time : O(logN)
Space : O(1)
ALGO : Binary Search
DS : Array
*/

var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  let m = -1;
  while (l <= r) {
    m = Math.floor(l + (r - l) / 2);
    if (nums[m] === target) return m;
    else if (nums[l] <= nums[m]) {
      if (nums[l] <= target && target <= nums[m]) r = m - 1;
      else l = m + 1;
    } else {
      if (nums[m] <= target && target <= nums[r])
        l = m + 1; // 오름차순이여서 그 안에 있는 경우
      else r = m - 1;
    }
  }
  return nums[m] === target ? m : -1;
};
