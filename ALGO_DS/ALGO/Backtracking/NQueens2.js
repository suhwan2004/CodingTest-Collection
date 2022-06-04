/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

constraints : 1 <= n <= 9

Solution Thinking
1.2중 for문으로 하나씩 다 본다. 다만, grid내에서 1로 기록되어 있는 부분은 접근하지 않는다.

dfs접근
for을 돌며 아마 갈 수 있는 위치를 확인해야 될 것 같은데...


2.count++, return count


0 x x x
x x x 0
x x x x
x 1 x x



1 x x x   확인하는 dfs => 일단은 다 바꿀꺼임 방향을 따라가며 x로   
x x 1 x   근데 만약에, 지금 확인하는 위치의 값이 1일 때는? 그런 경우에는 현재 우리가 1을 둔 곳은 안된다.
x x x x
x 1 x x => 다음으로 가기 전에 더 이상 못돌아.(4개면 count 추가, 아니면 다시 그냥 돌아각.)

0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0

*/

var totalNQueens = function (n) {
  //edge case
  if (n === 1) return 1;
  let grid = make2dArr();
  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
  ];
  
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let set = new Set();
      if (grid[i][j] === 0) {
        dfs(i, j, make2dArr(), set);
      }
    }
  }

  function make2dArr(val) {
    return Array.from(Array(val), () => Array(val).fill(0));
  }

  //
  function dfs(row, col, Arr, targetSet) {
    let newArr = make2dArr(4);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        newArr[i][j] = Arr[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {}
    }

    gridSet.add(`${row},${col}`);
  }
};

console.log(totalNQueens(4));
