/*
You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.
*/

let input = [
  ["f", "f", "f", "f"],
  ["t", "t", "f", "t"],
  ["f", "f", "f", "f"],
  ["f", "f", "f", "f"],
];

function solution(arr, start, end) {
  let map = new Map(); // Store {loc : cost}
  let loc = start.slice();
  let min = Infinity;
  let dic = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  dfs(loc, 0);
  return min === Infinity ? null : min;

  function dfs(loc, cost) {
    console.log(map);
    if (loc[0] === end[0] && loc[1] === end[1]) {
      min = Math.min(min, cost);
      return;
    }
    for (let i = 0; i < 4; i++) {
      let col = loc[0] + dic[i][0];
      let row = loc[1] + dic[i][1];
      if (
        col >= 0 &&
        col <= arr.length - 1 &&
        row >= 0 &&
        row <= arr[0].length - 1
      ) {
        if (arr[col][row] == "f") {
          if (map.has(`${col},${row}`)) {
            if (map.get(`${col},${row}`) > cost + 1) {
              map.set(`${col},${row}`, cost + 1);
              dfs([col, row], cost + 1);
            } else continue;
          } else {
            map.set(`${col},${row}`, cost + 1);
            dfs([col, row], cost + 1);
          }
        }
      }
    }
  }
}

console.log(solution(input, [3, 0], [0, 0]));
