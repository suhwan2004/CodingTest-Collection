var maxFrequency = function (nums, k) {
  //O(nlogn)
  nums.sort((a, b) => a - b);

  let l = 0,
    res = -Infinity,
    total = 0;

  for (let r = 0; r < nums.length; r++) {
    //O(n)
    total += nums[r];
    while (nums[r] * (r - l + 1) > total + k) total -= nums[l++];

    res = Math.max(res, r - l + 1);
  }

  return res;
};
