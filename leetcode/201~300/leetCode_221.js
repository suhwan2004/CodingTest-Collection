/*
Input : int 2d Array(matrix)
Output : int(size of maximum square)
Contraints : 
 - m == matrix.length
 - n == matrix[i].length
 - 1 <= m, n <= 300
 - matrix[i][j] is '0' or '1'.
E : x
*/

/*
Optimal Solution 

Time : O(MN)
Space : O(1)
ALGO : DP, for
DS : Array
*/

var maximalSquare = function (matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || j === 0) {
        max = Math.max(matrix[i][j], max);
        continue;
      }
      if (matrix[i][j] === "1") {
        let val =
          Math.min(
            Number(matrix[i - 1][j]),
            Number(matrix[i - 1][j - 1]),
            Number(matrix[i][j - 1])
          ) + 1;
        max = Math.max(max, val);
        matrix[i][j] = String(val);
      }
    }
  }
  return max * max;
};
