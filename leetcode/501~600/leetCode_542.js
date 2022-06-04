/*
BFS... 
Time : O(N^2) , N = > mat의 넓이...  java로 짜면 O(N)될듯?
Space : O(N) , dist에 씀.

DP는 모르겠다!! 나중에 해봐야지...
*/
var updateMatrix = function (mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  let direction = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let queue = [];
  let dist = Array.from(Array(rows), () => Array(cols).fill(Infinity)); //정답반환배열. 초기값은 Infinity

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        //만약에 0이면 해당 위치의 dist의 값도 0으로 바꾸고, queue에 넣어줌.
        dist[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    //O(N);
    let val = queue.shift(); // *O(N)
    for (let i = 0; i < direction.length; i++) {
      //O(4)
      let row = val[0] + direction[i][0];
      let col = val[1] + direction[i][1];
      if (row >= 0 && row < rows && col >= 0 && col < cols) {
        if (dist[row][col] > dist[val[0]][val[1]] + 1) {
          // 상하좌우 보는 값이 지금 현재 자리 값보다 더 크다?
          dist[row][col] = dist[val[0]][val[1]] + 1; // 상하좌우 이동한 값 => 현재자리 + 1로 갱신
          queue.push([row, col]); // 바꾼 값의 위치 삽입.
        }
      }
    }
  }
  return dist;
};
