//1.Using D&C Solution
function Search2DMatrix2(matrix, target) {
  if (!matrix || !matrix.length) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;

  function hasTarget(startRow, endRow, startCol, endCol) {
    if (startRow > endRow || startCol > endCol) return false;

    const middleRow = Math.floor((endRow - startRow) / 2) + startRow;
    const middleCol = Math.floor((endCol - startCol) / 2) + startCol;

    if (matrix[middleRow][middleCol] === target) return true;

    if (matrix[middleRow][middleCol] < target) {
      // let m - is our middle point.
      // if m less than the target than all points before m also less tha target (marked by x)
      // so we only need look through cells marked by 1 and 2
      // x x x 2 2
      // x x x 2 2
      // x x m 2 2
      // 1 1 1 1 1
      // 1 1 1 1 1
      return (
        hasTarget(middleRow + 1, endRow, startCol, endCol) ||
        hasTarget(startRow, middleRow, middleCol + 1, endCol)
      );
    } else {
      // let m - is our middle point.
      // if m more than the target than all points after m also bigger than the target (marked by x)
      // so we only need look through cells marked by 1 and 2
      // 1 1 2 2 2
      // 1 1 2 2 2
      // 1 1 m x x
      // 1 1 x x x
      // 1 1 x x x
      return (
        hasTarget(startRow, endRow, startCol, middleCol - 1) ||
        hasTarget(startRow, middleRow - 1, middleCol, endCol)
      );
    }
  }

  return hasTarget(0, rows - 1, 0, cols - 1);
}

//2.Simple Solution
function simpleSolution(matrix, target) {
  let i = matrix.length - 1;
  let j = 0;

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) i--;
    else if (matrix[i][j] < target) j++;
    else return true;
  }
  return false;
}
