function Main() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  let [[N, M], arr] = input.map((cur) => cur.split(" ").map((cur1) => +cur1));
  let l = 0,
    r = 0;

  arr.forEach((cur) => {
    r = Math.max(r, cur);
  });

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    let sum = 0;
    arr.forEach((cur) => {
      let diff = cur - mid;
      sum += diff > 0 ? diff : 0;
    });
    if (sum < M) r = mid;
    else l = mid + 1;
  }
  console.log(l - 1);
}

Main();
