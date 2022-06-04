/*
Input : int(m === row.length), int(n = column.length)
Output : int( the number of possible unique paths that the robot can take to reach the bottom-right corner)
Contraints : 1 <= m, n <= 100
E : x

Optimal Solution
Time : O(2N + N^2) => O(N^2)
Space : O(N^2)
ALGO : DP, for
Space : Array
*/

var uniquePaths = function (m, n) {
  let dp = Array.from(Array(m), () => Array(n).fill(0));
  //찾음. dp로 풀기 가능. 위랑 왼쪽을 더해주면 됨.
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};
