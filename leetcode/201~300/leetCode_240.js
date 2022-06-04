/*
Input : int 2d Array(nums), int(target)
Output :boolean(if target is in nums)
Contraints : 
 - m == matrix.length
 - n == matrix[i].length
 - 1 <= n, m <= 300
 - -10^9 <= matrix[i][j] <= 10^9
 - All the integers in each row are sorted in ascending order.
 - All the integers in each column are sorted in ascending order.
 - -10^9 <= target <= 10^9
E : x
*/

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : two pointer
DS : Array
*/

var searchMatrix = function (matrix, target) {
  let i = matrix.length - 1;
  let j = 0;

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) i--;
    else if (matrix[i][j] < target) j++;
    else return true;
  }
  return false;
};
