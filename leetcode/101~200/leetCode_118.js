/*
Input : int(numRows)
Output : int 2d Array(pascal's Triangle)
Contraints : 1 <= numRows <= 30
E : x
*/

/*
DS: Array
ALGO: DP
Time : O(nlogn)
Space: O(n*m);
*/
var generate = function (numRows) {
  let dp = [];
  for (let i = 0; i < numRows; i++) {
    dp[i] = [];
    dp[i][0] = 1;
    dp[i][i] = 1;
    for (let j = 1; j < i; j++) {
      //한 depth씩 증가.
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  return dp;
};
