function Solution(text) {
  let stack = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == "(") stack.push(text[i]);
    else {
      //)인 경우
      if (stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        stack.push(stack[i]);
      }
    }
  }
  return stack.length;
}

console.log(Solution("())("));
