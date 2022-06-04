var findLength = function (nums1, nums2) {
  let count = 0;
  let max = 0;
  let dp = Array.from(Array(nums2.length), () => new Array(nums1.length));
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] == nums2[0]) dp[0][i] = 1;
    else dp[0][i] = 0;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] == nums1[0]) dp[i][0] = 1;
    else dp[i][0] = 0;
  }

  for (let i = 1; i < nums2.length; i++) {
    for (let j = 1; j < nums1.length; j++) {
      if (nums2[i] == nums1[j]) {
        if (dp[i - 1][j - 1] >= 1) dp[i][j] = dp[i - 1][j - 1] + 1;
        else dp[i][j] = 1;
        if (dp[i][j] > max) max = dp[i][j];
      } else {
        dp[i][j] = 0;
        if (dp[i - 1][j - 1] > max) max = dp[i - 1][j - 1];
      }
    }
  }
  return max;
};
