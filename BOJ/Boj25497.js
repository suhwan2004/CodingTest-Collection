function Main() {
  let [n, skillStr] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let prevL = [];
  let prevS = [];
  let cnt = 0;
  let flag = true;

  for (let i = 0; i < skillStr.length; i++) {
    switch (skillStr[i]) {
      case "L":
        prevL.push("L");
        break;
      case "R":
        if (prevL.length) {
          prevL.pop();
          cnt++;
        } else flag = false;
        break;
      case "S":
        prevS.push("S");
        break;
      case "K":
        if (prevS.length > 0) {
          prevS.pop();
          cnt++;
        } else flag = false;
        break;
      default:
        cnt++;
        break;
    }
    if (!flag) break;
  }
  console.log(cnt);
}

Main();
