/*
Input : int(square.row and column.length === n)
Output : int 2d Array(traveled Spiral matrix)
Contraints : 1 <= n <= 20
E : x
*/

/*
Optimal Solution
Time : O(N^2), N === res.length , N^2 ===> square
Space : O(N), callstack, res
ALGO : dfs
DS : Array, hashSet
*/
var generateMatrix = function (n) {
  let res = Array.from(new Array(n), () => new Array(n));
  let direction = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ]; //right, down, left, up....
  let visited = new Set();
  visited.add(`0,0`);
  dfs(0, 0, 0, 1, true);
  return res;

  function dfs(row, col, pos, count, flag) {
    if (flag) res[row][col] = count;
    if (visited.size === Math.pow(n, 2)) return;
    visited.add(`${row},${col}`);
    pos = pos % 4;
    let [pRow, pCol] = direction[pos];

    if (
      row + pRow >= 0 &&
      row + pRow < n &&
      col + pCol >= 0 &&
      col + pCol < n
    ) {
      if (!visited.has(`${row + pRow},${col + pCol}`)) {
        dfs(row + pRow, col + pCol, pos, count + 1, true);
      } else dfs(row, col, pos + 1, count, false);
    } else {
      dfs(row, col, pos + 1, count, false);
    }
  }
};
