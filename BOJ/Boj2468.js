function Main() {
  let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  let N = +input[0];
  let board = [];
  let directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let heightSet = new Set();
  for (let i = 1; i < input.length; i++) {
    board.push(
      input[i].split(" ").map((cur) => {
        const numCur = Number(cur);
        heightSet.add(numCur);
        return numCur;
      })
    );
  }

  let maxAreaCnt = 1;
  let heightArr = Array.from(heightSet).sort((a, b) => a - b);

  for (let h of heightArr) {
    let curAreaCnt = 0;
    let visited = Array.from({ length: N }, () => Array(N).fill(false));

    function dfs(i, j) {
      visited[i][j] = true;
      for (let [r, c] of directions) {
        let newR = i + r;
        let newC = j + c;
        if (
          newR >= 0 &&
          newR < N &&
          newC >= 0 &&
          newC < N &&
          board[newR][newC] > h &&
          !visited[newR][newC]
        ) {
          dfs(newR, newC);
        }
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] > h && !visited[i][j]) {
          dfs(i, j);
          curAreaCnt++;
        }
      }
    }

    maxAreaCnt = Math.max(maxAreaCnt, curAreaCnt);
  }

  console.log(maxAreaCnt);
}

Main();
