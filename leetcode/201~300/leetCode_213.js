/*
Input : int Array(nums)
Output : int(return the maximum amount of money you can rob tonight without alerting the police)
Contraints : 
 - 1 <= nums.length <= 100
 - 0 <= nums[i] <= 1000
E : x
*/

/*
11:20 ~ 11:29
Time : O(2N) => O(N)
Space : O(N)
ALGO : DP, for
DS : Array
*/
var rob = function (nums) {
  if (nums.length <= 3) {
    //edge case
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      max = Math.max(nums[i], max);
    }
    return max;
  }

  //find when start to max index 0 (end : nums.length -1 )
  let arr = new Array(nums.length - 1);
  arr[0] = nums[0];
  arr[1] = Math.max(nums[0], nums[1]);
  let first, second;
  for (let i = 2; i < nums.length - 1; i++) {
    arr[i] = Math.max(arr[i - 2] + nums[i], arr[i - 1]);
  }
  first = arr[arr.length - 1];

  //find when start to max index 1 (end : nums.length)
  arr = new Array(nums.length);
  arr[1] = nums[1];
  arr[2] = Math.max(nums[1], nums[2]);
  for (let i = 3; i < nums.length; i++) {
    arr[i] = Math.max(arr[i - 2] + nums[i], arr[i - 1]);
  }
  second = arr[arr.length - 1];

  return Math.max(first, second);
};
