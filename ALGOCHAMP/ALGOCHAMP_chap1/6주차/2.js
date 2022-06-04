/*

Dp 문제...
왼쪽, 윗 왼 대각선, 위쪽을 비교해서 최솟값에 1을 더해주면 되는 문제.

시간 : O(n)  n은 2차원 배열로 만들어진 매트릭스의 총 길이.
공간 : O(1) 따로 쓰는 공간 없음.
*/

/*
  0 1 1 1
  1 1 2 2
  0 1 2 3

  3 + 6 + 6 = 15

*/
const matrix = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];

var countSquares = function (matrix) {
  var clen = matrix.length;
  var rlen = matrix[0].length;
  var sum = 0;

  for (let i = 0; i < clen; i++) {
    for (let j = 0; j < rlen; j++) {
      if (i > 0 && j > 0 && matrix[i][j] > 0) {
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) +
          1;
        //위, 왼, 대각선 비교후 +1을 해줌. 이는 최대 정사각형 길이를 구해주기 위함.
      }
      sum += matrix[i][j];
    }
  }
  return sum;
};

console.log(countSquares(matrix));
