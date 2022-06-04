/*
Input : int(column.length or row.length)
Output : int(the number of distinct solutions to the n-queens puzzle.)
Contraints : 
 - 1 <= n <= 9
E : x 
*/

/*

Optimal Solution

51번과 52번은 상당히 유사항 리턴값만 차이가 남.

Time : O(N!)
Space : O(N)
ALGO : Backtracking, dfs , for
DF : hashSet
*/
var totalNQueens = function (n) {
  let selo = new Set();
  let upCross = new Set();
  let downCross = new Set();
  let resCount = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    count = 0;
    dfs(0, i);
    deleteSet(0, i);
  }

  return resCount;

  function dfs(row, col) {
    count++;
    if (count === n) {
      resCount++;
      return;
    }
    addSet(row, col);
    row++;
    if (row === n) return;

    for (let i = 0; i < n; i++) {
      if (selo.has(i) || upCross.has(row + i) || downCross.has(row - i))
        continue;
      dfs(row, i);
      count--;
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
};
