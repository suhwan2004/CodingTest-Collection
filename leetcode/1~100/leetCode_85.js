/*
Input : int 2d Array(matrix)
Output : int(max rectangle to make matrix)
Contraints : 
 - rows == matrix.length
 - cols == matrix[i].length
 - 1 <= row, cols <= 200
 - matrix[i][j] is '0' or '1'.
E : if (!matrix.length) return 0;
*/

/*
Bruth Force
 => 전체를 일일이 다 보는 경우. 무조건 시간초과가 났음.

my Solution
Time : O(N * M^2)
Space : O(1)
ALGO : for, DP
DS : Array

*/

const maximalRectangle = function (matrix) {
  if (!matrix.length) return 0;
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  const dp = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  let maxArea = 0;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      //현재 위치에서 0까지 닿을 수 있는 높이를 나타냄.
      if (row === 0) dp[row][col] = matrix[row][col] == "1" ? 1 : 0;
      else dp[row][col] = matrix[row][col] == "1" ? dp[row - 1][col] + 1 : 0;

      //현재 가로위치에서 0까지 보면서 직사각형이 만들어지면 그 넓이를 구해줌.
      let minHeight = dp[row][col];
      for (let pointer = col; pointer >= 0; pointer--) {
        if (minHeight === 0) break;
        if (dp[row][pointer] < minHeight) minHeight = dp[row][pointer];
        maxArea = Math.max(maxArea, minHeight * (col - pointer + 1));
      }
    }
  }
  return maxArea;
};
