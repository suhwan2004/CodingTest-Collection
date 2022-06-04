/*
Input : int Array(board), String(word)
Output : boolean(can go path equal word?)
Contraints : 
 - m == board.length
 - n = board[i].length
 - 1 <= m, n <= 6
 - 1 <= word.length <= 15
 - board and word consists of only lowercase and uppercase English letters.
 - Follow up: Could you use search pruning to make your solution faster with a larger board?
E : x
*/

/*
Optimal Solution

Time : O(NM * 4^MN)
Space : O(4^MN)
ALGO : BackTracking, DFS, for
DS : Array
*/

var exist = function (board, word) {
  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let answer = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        let char = board[i][j];
        board[i][j] = 0;
        dfs(1, i, j);
        board[i][j] = char;
        if (answer) return answer;
      }
    }
  }
  return answer;

  function dfs(current, row, col) {
    if (current === word.length) {
      answer = true;
      return;
    }
    for (let [i, j] of direction) {
      let [newRow, newCol] = [row + i, col + j];
      if (
        newRow >= 0 &&
        newRow < board.length &&
        newCol >= 0 &&
        newCol < board[0].length &&
        word[current] === board[newRow][newCol]
      ) {
        let char = board[newRow][newCol];
        board[newRow][newCol] = 0;
        dfs(current + 1, newRow, newCol);
        board[newRow][newCol] = char;
      }
    }
  }
};
