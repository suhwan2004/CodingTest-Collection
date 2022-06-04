/*
Input : int 2d Array(grid)
Output : int(Minimum path sum)
Contraints : 
 - m == grid.length
 - n == grid[i].length
 - 1 <= m, n <= 200
 - 0 <= grid[i][j] <= 100
E : x
*/

/*
Optimal Solution
Time : O(MN)
Space : O(MN)
ALGO : DP, for
DS : Array
*/

var minPathSum = function (grid) {
  let dp = grid.slice();
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = dp[i][0] + dp[i - 1][0];
  }
  for (let i = 1; i < dp[0].length; i++) {
    dp[0][i] = dp[0][i] + dp[0][i - 1];
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + dp[i][j];
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};
