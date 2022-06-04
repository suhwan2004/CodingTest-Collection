/*
Input : int array(tokens)
Output : int(후위 표기식으로 된 식의 계산결과)
Contraints : 
 - 1 <= tokens.length <= 104
 - tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
E : x
*/

/*
Time : O(N)
Space : O(N)
ALGO : for
DS : stack, Array
*/

var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    let num, num1;
    if (tokens[i] === "+") {
      num = stack.pop();
      num1 = stack.pop();
      stack.push(num1 + num);
    } else if (tokens[i] === "-") {
      num = stack.pop();
      num1 = stack.pop();
      stack.push(num1 - num);
    } else if (tokens[i] === "*") {
      num = stack.pop();
      num1 = stack.pop();
      stack.push(num1 * num);
    } else if (tokens[i] === "/") {
      num = stack.pop();
      num1 = stack.pop();
      let result = num1 / num;
      if (result >= 0) stack.push(Math.floor(num1 / num));
      else stack.push(-1 * Math.floor(Math.abs(num1 / num)));
    } else stack.push(Number(tokens[i]));
  }
  return stack[0];
};
