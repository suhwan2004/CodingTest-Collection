/*
Input : int Array(nums)
Output : int(index of peak Element) => peak Element : an element that is strictly greater than its neighbors.
Contraints : 
 - 1 <= nums.length <= 1000
 - -2^31 <= nums[i] <= 2^31 - 1
 - nums[i] != nums[i + 1] for all valid i.
E :   
 - if (nums.length === 1) return 0;
 - if (nums.length === 2) return nums[0] > nums[1] ? 0 : 1;
*/

/*
Time : O(LogN)
Space : O(1)
ALGO : Binary Search, for
DS : Array
*/
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  if (nums.length === 2) return nums[0] > nums[1] ? 0 : 1;
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] < nums[mid + 1]) l = mid + 1;
    else r = mid;
  }
  return l;
};
