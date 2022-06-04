/*
0이 땅이고 1이 강임.
river size를 구하면 됨. 배열로.
*/

let matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

const solution = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        arr[i][j] = 0;
        res.push(dfs(arr, i, j, 1));
      }
    }
  }
  return res;
};
function dfs(arr, i, j, count) {
  let num;
  if (i != arr.length - 1 && arr[i + 1][j] == 1) {
    arr[i + 1][j] = 0;
    count++;
    num = dfs(arr, i + 1, j, count);
  } else if (j != 0 && arr[i][j - 1] == 1) {
    arr[i][j - 1] = 0;
    count++;
    num = dfs(arr, i, j - 1, count);
  } else if (j != arr[0].length - 1 && arr[i][j + 1] == 1) {
    arr[i][j + 1] = 0;
    count++;
    num = dfs(arr, i, j + 1, count);
  } else {
    return count;
  }
  return num;
}

console.log(solution(matrix));
