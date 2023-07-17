function Main() {
  let input = require("fs").readFileSync("/dev/stdin").toString().split(".");

  for (let i = 0; i < input.length - 1; i++) {
    let a = [];
    if (input[i].length === 1 && input[i] === "\n") continue;
    for (let j = 0; j < input[i].length; j++) {
      if (a.length > 0 && (a[a.length - 1] === ")" || a[a.length - 1] === "]"))
        break;
      switch (input[i][j]) {
        case "(":
          a.push("(");
          break;
        case ")":
          if (a[a.length - 1] === "(") a.pop();
          else a.push(")");
          break;
        case "[":
          a.push("[");
          break;
        case "]":
          if (a[a.length - 1] === "[") a.pop();
          else a.push("]");
          break;
        default:
          break;
      }
    }
    console.log(a.length === 0 ? "yes" : "no");
  }
}

Main();
