function Main() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let [r, c] = input[0].split(" ").map((cur) => +cur);

  let arr = [];
  for (let i = 1; i <= r; i++) {
    arr.push(input[i].split(""));
  }

  let cnt = 0;
  let visited = new Set();
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (!visited.has(i * c + j)) {
        dfs(i, j, arr[i][j]);
        cnt++;
      }
    }
  }

  console.log(cnt);
  function dfs(i, j, base) {
    if (base === "-") {
      visited.add(i * c + j);
      if (j < c - 1 && arr[i][j + 1] === base) dfs(i, j + 1, base);
    } else if (base === "|") {
      visited.add(i * c + j);
      if (i < r - 1 && arr[i + 1][j] === base) dfs(i + 1, j, base);
    }
  }
}

Main();
