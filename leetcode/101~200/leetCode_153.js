/*
Input : int Array(nums)
Output : int(return the minimum element of this array.)
Contraints : 
 - n == nums.length
 - 1 <= n <= 5000
 - -5000 <= nums[i] <= 5000
 - All the integers of nums are unique.
 - nums is sorted and rotated between 1 and n times.
 - You must write an algorithm that runs in O(log n) time.
E : x
*/

/*
Optimal Solution
Time : O(LogN)
Space : O(1)
ALGO : Binary Search
DS : Array
*/

var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.min(nums[0], nums[1]);
  let l = 0,
    r = nums.length - 1;
  let res = Infinity;
  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    res = Math.min(nums[mid], res);

    if (nums[l] < nums[r]) {
      r = mid - 1;
    } else {
      if (nums[mid] < nums[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return res;
};
