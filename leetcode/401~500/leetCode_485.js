var findMaxConsecutiveOnes = function (nums) {
  let max = -Infinity;
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) len++;
    else {
      max = Math.max(max, len);
      len = 0;
    }
  }
  return Math.max(max, len);
};
