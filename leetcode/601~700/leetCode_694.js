var numDistinctIslands = function (grid) {
  let directions = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ]; //down,left,right,up
  let set = new Set(); // store new Pattern

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) set.add(dfs(i, j, 0, 0));
    }
  }
  return set.size;

  function dfs(r, c, br, bc) {
    grid[r][c] = -1;
    let cur = `${br}.${bc}|`;
    for (let i = 0; i < directions.length; i++) {
      let [newR, newC] = [r + directions[i][0], c + directions[i][1]];
      let [newBr, newBc] = [br + directions[i][0], bc + directions[i][1]];
      if (
        newR >= 0 &&
        newR < grid.length &&
        newC >= 0 &&
        newC < grid[0].length &&
        grid[newR][newC] === 1
      ) {
        let Word = dfs(newR, newC, newBr, newBc);
        cur += Word;
      }
    }
    return cur;
  }
};
