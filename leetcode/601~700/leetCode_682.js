var calPoints = function (ops) {
  let stack = [];
  let operations = ["C", "D", "+"];
  for (let i = 0; i < ops.length; i++) {
    if (!operations.includes(ops[i])) stack.push(Number(ops[i]));
    else {
      if (ops[i] === "C") stack.pop();
      else if (ops[i] === "D") stack.push(stack[stack.length - 1] * 2);
      else stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    }
  }

  return stack.reduce((prev, cur) => (prev += cur));
};
