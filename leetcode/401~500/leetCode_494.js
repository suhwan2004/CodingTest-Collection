var findTargetSumWays = function (nums, target) {
  let count = 0;
  dfs(nums[0], 0);
  dfs(-nums[0], 0);

  return count;

  function dfs(current, level) {
    if (level === nums.length - 1) {
      if (current === target) count++;
      return;
    }

    dfs(current + nums[level + 1], level + 1);
    dfs(current - nums[level + 1], level + 1);
  }
};
