var sortArrayByParityII = function (nums) {
  let arr = [];
  let arr1 = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) arr.push(nums[i]);
    else arr1.push(nums[i]);
  }

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    res.push(arr1[i]);
  }
  return res;
};
