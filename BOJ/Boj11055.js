function Main() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  let [N, A] = input.map((cur, idx) => {
    return idx === 0 ? +cur : cur.split(" ").map((curA) => +curA);
  });
  let map = new Map();
  let resultMax = 0;
  for (let i = N - 1; i >= 0; i--) {
    let sum = A[i];
    for (let j = i; j < N; j++) {
      if (A[j] > A[i] && map.has(j)) {
        sum = Math.max(sum, A[i] + map.get(j));
      }
    }
    map.set(i, sum);
    resultMax = Math.max(resultMax, sum);
  }
  console.log(resultMax);
}

Main();
