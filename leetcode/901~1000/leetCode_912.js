var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  let lArr = sortArray(nums.slice(0, Math.floor(nums.length / 2)));
  let rArr = sortArray(
    nums.slice(Math.floor(nums.length / 2), nums.length + 1)
  );
  let lP = 0,
    rP = 0,
    resArr = [];

  while (lP !== lArr.length && rP !== rArr.length) {
    lArr[lP] > rArr[rP] ? resArr.push(rArr[rP++]) : resArr.push(lArr[lP++]);
  }

  return [
    ...resArr,
    ...(lP !== lArr.length
      ? lArr.slice(lP, lArr.length + 1)
      : rArr.slice(rP, rArr.length + 1)),
  ];
};
