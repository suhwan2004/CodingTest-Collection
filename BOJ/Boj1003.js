function Main() {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const N = Number(input[0]);
  let map;
  for (let i = 1; i <= N; i++) {
    map = new Map();
    map.set(0, { 0: 1, 1: 0 });
    map.set(1, { 0: 0, 1: 1 });

    fibonacci(+input[i]);
    const result = map.get(+input[i]);
    console.log(`${result[0]} ${result[1]}`);
  }

  function fibonacci(n) {
    if (n == 0) {
      return [1, 0];
    } else if (n == 1) {
      return [0, 1];
    } else {
      const firstArr = map.has(n - 1) ? map.get(n - 1) : fibonacci(n - 1);
      const secondArr = map.has(n - 2) ? map.get(n - 2) : fibonacci(n - 2);
      const resultArr = [
        firstArr[0] + secondArr[0],
        firstArr[1] + secondArr[1],
      ];
      map.set(n, { 0: resultArr[0], 1: resultArr[1] });
      return resultArr;
    }
  }
}

Main();
