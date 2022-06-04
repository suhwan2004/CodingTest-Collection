//Bruth force : using sort
/*

var sortTransformedArray = function(nums, a, b, c) {
    let res = [];
    for(let i = 0; i < nums.length; i++){
        res.push(a*(nums[i]*nums[i]) + b*nums[i] + c);
    }
    res.sort((a,b) => a-b);
    return res;
};
*/
//Optimal Solution
var sortTransformedArray = function (nums, a, b, c) {
  let n = nums.length;
  let sorted = [];
  let i = 0,
    j = n - 1;
  let index = a >= 0 ? n - 1 : 0;
  while (i <= j) {
    if (a >= 0) {
      sorted[index--] =
        quad(nums[i], a, b, c) >= quad(nums[j], a, b, c)
          ? quad(nums[i++], a, b, c)
          : quad(nums[j--], a, b, c);
    } else {
      sorted[index++] =
        quad(nums[i], a, b, c) >= quad(nums[j], a, b, c)
          ? quad(nums[j--], a, b, c)
          : quad(nums[i++], a, b, c);
    }
  }
  return sorted;
  function quad(x, a, b, c) {
    return a * x * x + b * x + c;
  }
};
