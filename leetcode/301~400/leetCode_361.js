/*
first Solution - BFS

DS : array
ALGO : BFS
Time : O(N)
Space : O(N);
*/

var maxKilledEnemies = function (grid) {
  const checkRowCol = ([row, col], [rowIncrement, colIncrement]) => {
    let num = 0;
    while (
      row < grid.length &&
      col < grid[0].length &&
      grid[row][col] !== "W"
    ) {
      if (grid[row][col] === "E") num++;
      row += rowIncrement;
      col += colIncrement;
    }
    return num;
  };
  let res = 0,
    rowCount = 0,
    colCount = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "W") continue;
      if (!col || grid[row][col - 1] === "W")
        rowCount = checkRowCol([row, col], [0, 1]);
      if (!row || grid[row - 1][col] === "W")
        colCount[col] = checkRowCol([row, col], [1, 0]);
      if (grid[row][col] === "0") res = Math.max(res, rowCount + colCount[col]);
    }
  }
  return res;
};
