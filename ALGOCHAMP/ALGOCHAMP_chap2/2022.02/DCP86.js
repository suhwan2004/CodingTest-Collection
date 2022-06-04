/*
괄호 문자열이 주어지면 제거할 괄호의 최소 수를 계산하여 문자열을 유효하게 만드는 함수를 작성하십시오(즉, 각 열린 괄호는 결국 닫힙니다).

예를 들어, 문자열 "()())()"이 주어지면 1을 반환해야 합니다. 문자열 ")("이 주어지면 모두 제거해야 하므로 2를 반환해야 합니다.
*/

function Optimal(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    if (
      stack.length > 1 &&
      stack[stack.length - 2] === "(" &&
      stack[stack.length - 1] === ")"
    ) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length;
}

console.log(Optimal(")("));
