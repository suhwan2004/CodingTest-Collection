function Main() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((cur) => cur.split(" "));

  let [[H, W], blocks] = input;

  let arr = [];

  for (let i = 0; i < H; i++) {
    arr[i] = [];
    for (let j = 0; j < W; j++) {
      arr[i][j] = blocks[j] >= H - i ? 1 : 0;
    }
  }
  let total = 0;

  for (let i = 0; i < H; i++) {
    let sum = -1;
    for (let j = 0; j < W; j++) {
      if (arr[i][j] === 1) {
        if (sum !== -1) {
          total += sum;
          sum = -1;
        }
        sum = 0;
      } else if (arr[i][j] === 0 && sum >= 0) {
        sum++;
      }
    }
  }
  console.log(total);
}

Main();
