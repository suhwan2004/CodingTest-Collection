var largestUniqueNumber = function (nums) {
  let map = new Map();
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }
  for (let [k, v] of map) {
    if (v === 1) max = Math.max(max, k);
  }
  return max;
};
