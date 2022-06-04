/*
Time : O(N)
Space : O(N)
*/
var shiftGrid = function (grid, k) {
  let arr = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      arr.push(grid[i][j]);
    }
  }
  k = k % arr.length;
  arr = [...arr.slice(-k), ...arr.slice(0, -k)];

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      grid[i][j] = arr[count++];
    }
  }
  return grid;
};
