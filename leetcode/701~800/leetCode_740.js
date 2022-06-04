var deleteAndEarn = function (nums) {
  const n = 10001;
  const counts = new Array(n).fill(0);

  for (const num of nums) counts[num]++;

  const dp = new Array(n).fill(0);
  dp[1] = counts[1];

  for (let i = 2; i < n; i++) {
    const points = counts[i] * i;
    dp[i] = Math.max(dp[i - 2] + points, dp[i - 1]);
  }

  return dp[n - 1];
};
