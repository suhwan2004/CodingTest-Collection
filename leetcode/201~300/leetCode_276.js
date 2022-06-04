/*
Time Over
Input : n(int), k(int)
Output : counts of pences
Constraints : 
 - 1 <= n <= 50
 - 1 <= k <= 10^5
 - The testcases are generated such that the answer is in the range [0, 231 - 1] for the given n and k.
Edge case : if(k === 1) return n > 2 ? 0 : 1;
*/

/*
Bruth force
DS: x
ALGO : DFS
Time : O(K^N)
Space : O(K^N)*/
var numWays = function (n, k) {
  let res = 0;
  for (let i = 0; i < k; i++) {
    dfs(i, 1, 1);
  }
  return res;

  function dfs(prev, count, total) {
    if (total === n) {
      res++;
      return;
    }
    for (let i = 0; i < k; i++) {
      if (prev === i && count === 2) {
        continue;
      } else {
        dfs(i, prev === i ? count + 1 : 1, total + 1);
      }
    }
  }
};

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : DP, for
DS : Array
 */

var numWaysOptimal = function (n, k) {
  if (k === 1) return n > 2 ? 0 : 1;
  let dp = [0, k, k * k];
  if (n <= 2) return dp[n];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) * (k - 1);
  }
  return dp[n];
};
