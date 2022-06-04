var maxAreaOfIsland = function (grid) {
  let maxSize = 0;
  let curSize = 0;
  let directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        maxSize = Math.max(curSize, maxSize);
        curSize = 0;
      }
    }
  }

  return maxSize;

  function dfs(row, col) {
    grid[row][col] = 0;
    curSize++;
    for (let direction of directions) {
      let newRow = row + direction[0];
      let newCol = col + direction[1];
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length &&
        grid[newRow][newCol] === 1
      )
        dfs(newRow, newCol);
    }
  }
};
