var isMajorityElement = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    nums[mid] < target ? (l = mid + 1) : (r = mid - 1);
  }

  return nums[l + Math.floor(nums.length / 2)] === target;
};
