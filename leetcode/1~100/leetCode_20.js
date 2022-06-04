/*
Input : String(s)
Output : boolean(s is Valid Parentheses?)
Contraints : 
 - 1 <= s.length <= 10^4
 - s consists of parentheses only '()[]{}'.
E : x

Optimal Solution
Time : O(N)
Space : O(1)
ALGO : for
DS : Stack, Array
*/

var isValid = function (s) {
  let stack = [];
  let obj = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let cur of s) {
    if (cur in obj) stack.push(cur);
    else {
      if (cur === obj[stack[stack.length - 1]]) stack.pop();
      else return false;
    }
  }

  return stack.length === 0 ? true : false;
};
