/*
Input : int 2d Array(matrix), int(target)
Output : boolean(Is target in the matrix?)
Contraints : 
 - m == matrix.length
 - n == matrix[i].length
 - 1 <= m, n <= 100
 - -10^4 <= matrix[i][j], target <= 10^4
E : x
*/

/*
bruthe force
Time : O(M*N)
Space : O(1)
ALGO : for
DS : Array
*/
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};

/*
Optimal Solution(Using Binary Search)
Time : O(logMN)
Space : O(1)
ALGO : Binary Search, for
DS : Array
*/
var searchMatrix = function (matrix, target) {
  let l = 0,
    r = matrix.length * matrix[0].length - 1;
  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    let m = Math.floor(mid / matrix[0].length),
      n = mid % matrix[0].length; // 좌표 구하기.
    if (matrix[m][n] === target) return true;
    else if (matrix[m][n] > target) {
      //목표보다 더 큼
      r = mid - 1;
    } else {
      //목표보다 더 작음.
      l = mid + 1;
    }
  }
  return false;
};
