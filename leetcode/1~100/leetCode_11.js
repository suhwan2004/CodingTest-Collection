/*
Input : int array(height)
Output : int(area with the most water)
Constraints :
 - n == height.length
 - 2 <= n <= 105
 - 0 <= height[i] <= 104 
E : x

Optimal Solution

Time : O(N)
Space : O(N)
ALGO : two pointer
DS : Array
*/

var maxArea = function (height) {
  let l = 0,
    r = height.length - 1;
  let max = -Infinity;
  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
    height[l] < height[r] ? l++ : r--;
  }
  return max;
};
