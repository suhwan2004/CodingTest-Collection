/*
5: 40 ~ 6 : 10

Input : 이차원 배열
Output : 일차원 배열
Constraints : n == m , 1<= n,m <=1000 ,  n값과 m 값의 범위는 1~1000
Edgecase : ...

DS : array
ALGO : DFS
Time : O(n*m);
Space : O(n*m);

수도코드

오른쪽으로 돌아야 되는게 맞고, 한 칸씩 이동할 때마다 0으로 바꿔줘야 된다.
direction을 매개변수로 둬서 한번 이동하는 방향은 뚝심있게 배열의 길이에 막히거나, 다음 요소가 0일때(이미 방문한 장소일 때) 이동방향을 수정해야된다.
dfs내에 조건을 하나 둬야되요. 상하좌우가 다 0일 때 dfs를 종료하면 된다. 요소 값들을 담는 배열을 return 해주면 끝.
*/

let array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function solution(input) {
  let res = [];
  let col = input[0].length - 1;
  let row = input.length - 1;
  dfs(0, 0, "r");
  return res;

  function dfs(i, j, direction) {
    if (input[i][j] == input.length * input[0].length) {
      res.push(input[i][j]);
      return;
    }
    res.push(input[i][j]);
    input[i][j] = 0;
    if (direction == "r") {
      if (col >= j + 1 && input[i][j + 1] != 0) dfs(i, j + 1, direction);
      else dfs(i + 1, j, "d");
    } else if (direction == "d") {
      if (row >= i + 1 && input[i + 1][j] != 0) dfs(i + 1, j, direction);
      else dfs(i, j - 1, "l");
    } else if (direction == "l") {
      if (0 <= j - 1 && input[i][j - 1] != 0) dfs(i, j - 1, direction);
      else dfs(i - 1, j, "u");
    } else if (direction == "u") {
      if (0 <= i - 1 && input[i - 1][j] != 0) dfs(i - 1, j, direction);
      else dfs(i, j + 1, "r");
    }
  }
}

console.log(solution(array));
