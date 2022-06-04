/*
Input : String Array(grid)
Output : int(number of islands)
Contraints : 
 - m == grid.length
 - n == grid[i].length
 - 1 <= m, n <= 300
 - grid[i][j] is '0' or '1'.
E : x 
*/

/*
Time : O(MN)
Space : O(MN)
ALGO : DFS
DS : Array
*/

var numIslands = function (grid) {
  let count = 0;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }
  return count;

  function dfs(row, col) {
    grid[row][col] = "0";
    for (let dir of directions) {
      let nRow = row + dir[0];
      let nCol = col + dir[1];
      if (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < grid.length &&
        nCol < grid[0].length &&
        grid[nRow][nCol] === "1"
      )
        dfs(nRow, nCol);
    }
  }
};
