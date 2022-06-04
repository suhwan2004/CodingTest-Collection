/*
Input : int Array(nums)
Output : int(the minimum number of jumps to reach last index)
Contraints : 
 - 1 <= nums.length <= 104
 - 0 <= nums[i] <= 1000
E : x
*/

/*
Bruth force
Time : O(N^2)
Space : O(N)
ALGO : for
DS : Array
*/

var jump = function (nums) {
  let dp = new Array(nums.length);
  dp[0] = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      if (
        (dp[i + j] == undefined || dp[i] + 1 < dp[i + j]) &&
        i + j <= nums.length - 1
      )
        dp[i + j] = dp[i] + 1;
    }
  }
  return dp[dp.length - 1];
};

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : Greedy
DS : x
*/

var jumpOptimal = function (nums) {
  let max = 0;
  let count = 0;
  let b = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i >= max) return -1;

    if (i === b) {
      count++;
      b = max;
    }
  }
  return count;
};
