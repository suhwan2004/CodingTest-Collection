var countSquares = function (matrix) {
  var clen = matrix.length;
  var rlen = matrix[0].length;
  var sum = 0;

  for (let i = 0; i < clen; i++) {
    for (let j = 0; j < rlen; j++) {
      if (i > 0 && j > 0 && matrix[i][j]) {
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) +
          1;
      }
      sum += matrix[i][j];
    }
  }
  return sum;
};
