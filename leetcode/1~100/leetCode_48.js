/*
Input : int 2d Array(matrix)
Output : x
Contraints : 
 - n == matrix.length == matrix[i].length
 - 1 <= n <= 20
 - -1000 <= matrix[i][j] <= 1000
E : if(matrix.length === 1 && matrix[0].length === 1) return;


Bruth force 
Time : O(MN)
Space : O(1)
ALGO : for
DS : Array
*/

var rotate = function (matrix) {
  if (matrix.length === 1 && matrix[0].length === 1) return;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
};
