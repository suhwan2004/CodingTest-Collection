/*
time : O(n)
space : O(1)
*/
var maxDepth = function (s) {
  if (s.length == 1) return 0; //edge case
  let count = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") count++;
    else if (s[i] === ")") count--;
    max = Math.max(max, count);
  }
  return max;
};
