var minStartValue = function (nums) {
  let target = 1;
  while (target <= 10000) {
    let sum = target;
    let flag = true;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum <= 0) {
        flag = false;
        break;
      }
    }
    if (!flag) target++;
    else return target;
  }
};
