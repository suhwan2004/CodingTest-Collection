/*
9:47 ~ 9:51
time : O(N)
space : O(N)
*/
var countBinarySubstrings = function (s) {
  let arr = [];
  let current = s[0];
  let count = 1;
  let res = 0;

  for (let i = 1; i < s.length; i++) {
    if (current === s[i]) count++;
    else {
      arr.push(count);
      count = 1;
      current = s[i];
    }
  }
  arr.push(count);

  for (let i = 0; i < arr.length - 1; i++) {
    res += Math.min(arr[i], arr[i + 1]);
  }
  return res;
};
