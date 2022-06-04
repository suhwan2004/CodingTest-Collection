/*
Input : int 2d Array(board)
Output : int 2d Array(modifying board) => 사방이 X로 둘러싸인 O는 X로 변환한 board를 반환함.
Contraints : 
 - m == board.length
 - n == board[i].length
 - 1 <= m, n <= 200
 - board[i][j] is 'X' or 'O'.
E :x 
*/

/*
Time : O((N+M) * 4^(N+M))
Space : O(4^(N+M))
ALGO : dfs, backtracking
DS : Array

*/

var solve = function (board) {
  let direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        i > 0 &&
        i < board.length - 1 &&
        !(j === 0 || j === board[0].length - 1)
      )
        continue;
      if (board[i][j] === "O") dfs(i, j);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      else if (board[i][j] === "a") board[i][j] = "O";
    }
  }

  function dfs(i, j) {
    board[i][j] = "a";
    for (let [r, c] of direction) {
      let newR = i + r;
      let newC = j + c;
      if (newR < 0 || newR >= board.length) continue;
      if (newC < 0 || newC >= board[0].length) continue;
      if (board[newR][newC] === "O") dfs(newR, newC);
    }
  }
};
