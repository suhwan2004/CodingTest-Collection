/**
 * @param {number[]} nums
 * @return {number}]
 *
 *
 * time : O(NlogN)
 * space : O(1)
 * contraints
 *    * 4 <= nums.length <= 104
 *    * 1 <= nums[i] <= 104
 * edge case : x
 */

var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1] * nums[nums.length - 2] - nums[1] * nums[0];
};
