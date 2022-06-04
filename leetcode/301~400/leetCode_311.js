var multiply = function (mat1, mat2) {
  let product = Array.from(
    new Array(mat1.length),
    () => new Array(mat2[0].length)
  );
  for (let i = 0; i < mat1.length; i++) {
    // 1의 세로
    for (let j = 0; j < mat2[0].length; j++) {
      //2의 가로
      let sum = 0;
      for (let k = 0; k < mat1[0].length; k++) {
        // 2의 세로이자 1의 가로
        sum += mat1[i][k] * mat2[k][j];
      }
      product[i][j] = sum;
    }
  }
  return product;
};
