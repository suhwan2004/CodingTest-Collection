/*
I : int array(nums)
O : boolean(can reach last index?)
C : 
 - 1 <= nums.length <= 10^4
 - 0 <= nums[i] <= 10^5
E : if(nums.length === 1) return true
*/

/*
Bruth force
Time : O(NM), N === nums.length, M === nums[i]
Space : O(NM)
ALGO : for
DS : hashSet, Array
*/
var canJump = function (nums) {
  if (nums.length === 1) return true;
  let visited = new Set();
  let dp = new Array(nums.length).fill(false); // O(N)
  dp[0] = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (dp[i]) {
      for (let j = 0; j <= nums[i]; j++) {
        if (i + j >= nums.length - 1) return true;
        if (!dp[i + j]) dp[i + j] = true;
      }
    } else return false;
  }
  return dp[dp.length - 1];
};

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : Greedy
DS : Array
*/

var canJump = function (nums) {
  if (nums.length === 1) return true;

  let max = -Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(i + nums[i], max);
    if (max <= i) return false;
  }
  return true;
};
