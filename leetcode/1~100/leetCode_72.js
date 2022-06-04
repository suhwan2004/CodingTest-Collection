/*
Input : String(word1), String(word2) 
Output : int(Edit Distance)
Contraints : 
 - 0 <= word1.length, word2.length <= 500
 - word1 and word2 consist of lowercase English letters.
E : x 
*/

/*
Optimal Solution
Time : O(NM)
Space : O(NM)
ALGO : DP
DS : Array
*/

var minDistance = function (word1, word2) {
  let dp = Array(word1.length + 1)
    .fill()
    .map(() => Array(word2.length + 1));
  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i == 0) dp[0][j] = j;
      else if (j == 0) dp[i][0] = i;
      else if (word1[i - 1] == word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1;
    }
  }
  return dp[word1.length][word2.length];
};
