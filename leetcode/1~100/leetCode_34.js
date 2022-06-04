/*
Input : int Array(N), int(T)
Output : int Array(First and Last Position of Element in N)
Contraints : 
 - 0 <= nums.length <= 10^5
 - -10^9 <= nums[i] <= 10^9
 - nums is a non-decreasing array.
 - -10^9 <= target <= 10^9
 - You must write an algorithm with O(log n) runtime complexity.
 - If target is not found in the array, return [-1, -1].
E : 



Optimal Solution
Time : O(LogN)
Space : O(1)
ALGO : Binary Search
DS : Array
*/

var searchRange = function (N, T) {
  function binarySearch(tg, l, r) {
    while (l <= r) {
      let mid = Math.floor(l + (r - l) / 2); //중간값 구하기.
      if (N[mid] < tg) l = mid + 1;
      else r = mid - 1;
    }
    return l;
  }

  let realL = binarySearch(T, 0, N.length - 1);
  if (N[realL] !== T) return [-1, -1];
  return [realL, binarySearch(T + 1, realL, N.length - 1) - 1];
};
