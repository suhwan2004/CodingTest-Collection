/*
일단, 0을 만나면 땅이기 때문에 dfs를 시작한다.
생각해야 될 dfs의 조건들
1. 일단, 이게 섬이라고 생각하고 1을 추가한 상태로 시작함.
2. 만약, row or col이 0 또는 grid.length-1에 닿는다면 그건 다 실격임.카운트를 하나 차감해주면 됨.
이거 반복
*/
var closedIsland = function (grid) {
  let res = 0;
  let flag = true;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        res++;
        dfs(i, j);
        flag = true;
      }
    }
  }
  return res;
  function dfs(row, col) {
    if (
      (row === 0 ||
        row === grid.length - 1 ||
        col === 0 ||
        col === grid[0].length - 1) &&
      flag
    ) {
      res--;
      flag = false;
    }
    grid[row][col] = 2;
    for (let direction of directions) {
      let newR = direction[0] + row;
      let newC = direction[1] + col;
      if (
        newR >= 0 &&
        newR < grid.length &&
        newC >= 0 &&
        newC < grid[0].length &&
        grid[newR][newC] === 0
      )
        dfs(newR, newC);
    }
  }
};
