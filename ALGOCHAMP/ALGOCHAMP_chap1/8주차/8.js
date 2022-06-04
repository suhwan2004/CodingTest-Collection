/*
1은 땅이고, 0은 바다인 2차원 배열로 이뤄진 이진 매트릭스가 있다.
여기서, 땅 모양의 종류를 그냥 반환하면 되는 것임. 중복일 경우는 그냥 카운트에서 생략.
*/

const grid = [[1,1,0,0,0], [1,1,0,0,0], [0,0,0,1,1], [0,0,0,1,1]];

const solution = () => {
  for(let i = 0; i< grid.length; i++){
    for(let j = 0; j<grid[i].length; j++){
      dfs();
    }
  }
}
const dfs = () => {
  for(let i = 0;i <)
}