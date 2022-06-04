var findDuplicates = function (nums) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) res.push(nums[i]);
    else map.set(nums[i], 1);
  }
  return res;
};
