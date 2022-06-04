/*
You have an N by N board. Write a function that, given N, returns the number of possible arrangements of 
the board where N queens can be placed on the board without threatening 
each other, i.e. no two queens share the same row, column, or diagonal.
*/
/*
 1 x x x x
 x x 1 x x
 x x x x 1
 x 1 x x x
 x x x 1 x

 1 x x x x
 x x x 1 x
 x 1 x x x
 x x x x 1
 x x 1 x x



 일케보면 맨 처음에서 시작한다 가정했을 때에 차이가 그렇게 크지 않은 것을 볼 수 있음.
 지금 생각이나는 솔루션은...

 0,0을 시작으로 하여 그 자리에 퀸을 넣는순간 count++
 이후에 해야되는 일은... 아마도, 상하좌우, 모든 대각선 방향으로 x를 넣어줘야 될 것임.
*/

let input = Array.from(Array(4), () => Array(4).fill(null));

function solution(input) {
  if (input.length === 0) return []; // edge case
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

  for (let i = 0; i < input.length; i++) {
    // check하기 위해 모든 요소를 o로 넣어줌.(아예 빈 배열이 들어있다는 가정을 했음.)
    for (let j = 0; j < input[0].length; j++) {
      input[i][j] = "o";
    }
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i][j] === "o") {
        input[i][j] = "x";
        count++;
        for (let k = 0; k < direction.length; k++) {
          let row = i + direction[k][0];
          let col = j + direction[k][1];

          if (
            row >= 0 &&
            row < input.length &&
            col >= 0 &&
            col < input[0].length
          ) {
            findAndChange(row, col, k);
          }
        }
      }
    }
  }

  return count;

  function findAndChange(i, j, k) {
    input[i][j] = "x";
    let row = i + direction[k][0];
    let col = j + direction[k][1];
    if (row >= 0 && row < input.length && col >= 0 && col < input[0].length) {
      findAndChange(row, col, k);
    }
  }
}

console.log(solution(input));
