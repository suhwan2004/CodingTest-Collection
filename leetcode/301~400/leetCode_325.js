var maxSubArrayLen = function (nums, k) {
  const n = nums.length;
  const prefix = new Map();
  prefix.set(0, -1);

  let sum = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (!prefix.has(sum)) prefix.set(sum, i);

    const diff = sum - k;

    if (prefix.has(diff)) max = Math.max(max, i - prefix.get(diff));
  }

  return max;
};
