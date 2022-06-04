/*
Input : int Array(nums), 2 int(lower, upper)
Output : String Array( the smallest sorted list of ranges that cover every missing number exactly)
Contraints : 
 - -10^9 <= lower <= upper <= 10^9
 - 0 <= nums.length <= 100
 - lower <= nums[i] <= upper
 - All the values of nums are unique.
E :   if (nums.length === 0) return upper - lower === 0 ? [`${lower}`] : [`${lower}->${upper}`];
*/

/*
time : O(N)
Space : O(N)
ALGO : for
DS : Array
*/
var findMissingRanges = function (nums, lower, upper) {
  if (nums.length === 0)
    return upper - lower === 0 ? [`${lower}`] : [`${lower}->${upper}`];

  let arr = [];
  if (lower < nums[0]) {
    arr.push(checkPush(lower, nums[0]));
  }
  nums.push(upper + 1);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > 1)
      arr.push(checkPush(nums[i] + 1, nums[i + 1]));
  }

  return arr;

  function checkPush(s, e) {
    return Math.abs(e - s) === 1 ? `${s}` : `${s}->${e - 1}`;
  }
};
