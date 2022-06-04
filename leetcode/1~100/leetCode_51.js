/*
Input : int(row.length and column.length)
Output : String 2d Array(all distinct solutions to the n-queens puzzle.)
Contraints : 
1 <= n <= 9
E : x


Optimal Solution

Time : O(N!)
Space : O(N^2)
ALGO : backtracking, dfs, for
DS : HashSet, Array
*/

var solveNQueens = function (n) {
  let selo = new Set();
  let upCross = new Set();
  let downCross = new Set();
  let res = [];
  let cur;

  for (let i = 0; i < n; i++) {
    cur = [];
    dfs(0, i);
    deleteSet(0, i);
  }

  return res;

  function dfs(row, col) {
    cur.push(makeStr(row, col));
    if (cur.length === n) {
      res.push(cur.map((curVal) => curVal));
      return;
    }
    addSet(row, col);
    row++;
    if (row === n) return;

    for (let i = 0; i < n; i++) {
      if (selo.has(i) || upCross.has(row + i) || downCross.has(row - i))
        continue;
      dfs(row, i);
      cur.pop();
      deleteSet(row, i);
    }
  }

  function addSet(row, col) {
    selo.add(col);
    upCross.add(row + col); //  /임
    downCross.add(row - col); // \임
  }

  function deleteSet(row, col) {
    selo.delete(col);
    upCross.delete(row + col); //  /임
    downCross.delete(row - col); // \임
  }

  function makeStr(row, col) {
    let val = "";
    for (let i = 0; i < n; i++) {
      val += i === col ? "Q" : ".";
    }
    return val;
  }
};
