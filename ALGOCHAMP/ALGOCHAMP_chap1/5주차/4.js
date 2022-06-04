/*
0204 ~ 0304
board => 인형이 있는 2st array
moves => 뽑기기계가 움직일 위치.

일단 생각나는 것은 dfs

board[0][moves[i]]에서부터 아래로 쭉 내려감. [-1,0] 을 사용.
만약, 1 이상의 숫자가 존재한다면 해당 위치의 값을 0으로 바꾸고, 바구니 배열에 넣어줌.
(여기서 바구니 배열에 담긴 가장 끝 값과 해당 값이 같으면 바구니의 값 pop, 값 안넣음.)
만약, 값이 0이라면 한칸 더 내려감. 내려간 위치가 board[0].length-1 이라면 다음 moves로 넘김.
*/

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  var answer = 0;
  let arr = [];
  let result = 0;
  for (let i = 0; i < moves.length; i++) {
    let value = real(board, moves[i] - 1);
    if (value == -1) continue; // 높이 초과. 그냥 다음으로 넘어감.
    if (arr[arr.length - 1] == value) {
      arr.pop(); // arr의 마지막걸 빼주고.
      result += 2;
      continue; // 그냥 다음으로넘어감.
    }
    arr.push(value); //그냥 일반적인 경우. 그냥 값 푸쉬
  }
  return result;
}
function real(board, moves) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][moves] == 0) {
      continue;
    } else {
      let value = board[i][moves];
      board[i][moves] = 0;
      return value;
    }
  }
  return -1;
}

console.log(solution(board, moves));
