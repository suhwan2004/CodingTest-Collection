/*
O(N), O(N)
*/
var minRemoveToMakeValid = function (s) {
  let stack = [];
  let set = new Set();
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" || s[i] === "(") {
      if (s[i] === "(") stack.push(i);
      else {
        if (stack.length > 0 && s[stack[stack.length - 1]] === "(") stack.pop();
        else stack.push(i);
      }
    }
  }
  for (let i of stack) {
    set.add(i);
  }
  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) res += s[i];
  }
  return res;
};
