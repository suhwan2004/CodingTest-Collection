var shortestBridge = function (grid) {
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        if (arr.length == 0) {
          grid[i][j] = 2;
          dfs(grid, i, j, arr);
        } else {
          grid[i][j] = 2;
          dfs(grid, i, j, arr2);
        }
      }
    }
  }

  let val = 0;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      val =
        Math.abs(arr2[j][0] - arr[i][0]) + Math.abs(arr2[j][1] - arr[i][1]) - 1;
      if (min > val) min = val;
    }
  }
  return min;
};

function dfs(grid, i, j, arr) {
  arr.push([i, j]);
  if (i > 0 && grid[i - 1][j] == 1) {
    grid[i - 1][j] = 2;
    dfs(grid, i - 1, j, arr);
  }
  if (i < grid.length - 1 && grid[i + 1][j] == 1) {
    grid[i + 1][j] = 2;
    dfs(grid, i + 1, j, arr);
  }
  if (j > 0 && grid[i][j - 1] == 1) {
    grid[i][j - 1] = 2;
    dfs(grid, i, j - 1, arr);
  }
  if (j < grid[i].length - 1 && grid[i][j + 1] == 1) {
    grid[i][j + 1] = 2;
    dfs(grid, i, j + 1, arr);
  }
  return;
}
