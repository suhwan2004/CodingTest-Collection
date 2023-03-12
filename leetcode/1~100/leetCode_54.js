/*
time : O(MN);
space : O(MN); // MN === result.length
Algo : for, while
DS : array
*/

var spiralOrder = function (matrix) {
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let result = [];
  let curDir = 0,
    r = 0,
    c = 0,
    cnt = 0;
  result.push(matrix[0][0]);
  matrix[0][0] = -101;
  cnt++;

  while (cnt != matrix.length * matrix[0].length) {
    let curR = r + directions[curDir][0];
    let curC = c + directions[curDir][1];

    if (
      curR < 0 ||
      curR >= matrix.length ||
      curC < 0 ||
      curC >= matrix[0].length ||
      matrix[curR][curC] === -101
    ) {
      curDir = (curDir + 1) % 4;
    } else {
      result.push(matrix[curR][curC]);
      matrix[curR][curC] = -101;
      (r = curR), (c = curC);
      cnt++;
    }
  }
  return result;
};
