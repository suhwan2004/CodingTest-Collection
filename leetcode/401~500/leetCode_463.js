/*

9:39 ~ 10:08

I : int 2st array, grid
O : int, 지름
C : 
row == grid.length
col == grid[i].length
1 <= row, col <= 100
grid[i][j] is 0 or 1.
There is exactly one island in grid.
E : x

DS : 
ALGO : DFS 
Time : O(N) => N = row * col
Space : O(N)

푸는 방법 :
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
 

1.입력 이차원 배열의 길이만큼 2중 for문을 돔
2.이러다가 1을 발견함 => 오케이 섬의 어딘가를 발견했어! 그럼 탐색에 들어가자(dfs)
    1.땅의 지름을 셀거임. => 저라면 전역변수 하나를 선언해서 거기에 계속 더해줄 것 같아요.
    2.보통 이차원 배열과 dfs를 쓸때, 상하좌우로 이동하는 문제가 많음. 그럴 때 무조건 공통적인 조건이 있음.
       1. if(row >=0 && row <= grid.length -1 && col >= 0 && col <= grid[0].length -1 && grid[i][j]==1)
       2. 이런 조건이다. => 오 나는 범위 안에 있는 미 개척지를 발견했네? 이동.
           dfs(이동하는_row, 이동하는_col)
3.결론적으로 안 본 땅 없이, 다 확인이 되어 저 중첩 for문이 끝나면뭐다? 끝! return count;


for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
        if(grid[i][j] === 1){
            
        }
    }
}

*/
var islandPerimeter = function (grid) {
  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]; // 상하좌우 명시
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
      }
    }
  }

  return count;

  function dfs(row, col) {
    let val = 4;
    grid[row][col] = 2;
    for (let dir of direction) {
      // 저 위의 direction을 이용하여 네 방향을 dfs 접근하는것.
      let new_row = row + dir[0];
      let new_col = col + dir[1];
      if (
        new_row >= 0 &&
        new_row < grid.length &&
        new_col >= 0 &&
        new_col < grid[0].length
      ) {
        if (grid[new_row][new_col] == 2 || grid[new_row][new_col] == 1) val--;
        if (grid[new_row][new_col] == 1) dfs(new_row, new_col);
      }
    }
    count += val;
  }
};
