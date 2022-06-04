/*
1:44 ~ 2:14
input : 2st array
output : smallest turn
C : 
n == board.length == board[i].length
2 <= n <= 20
grid[i][j] is either -1 or in the range [1, n2].
The squares labeled 1 and n2 do not have any ladders or snakes.
E : ... 

DS : map, array
ALGO : for
Time : O(n)
Space : O(n)


1. 일차원 배열로 만든다.
2. 
  - 1. dfs(or bfs) for(1~6(최대 수같은 경우는 목적지에 다다름에 따라 다를 수있음))... 
  - 2. while 문을 map에 아예 1 ~ 36까지의 key를 기록해두고 여기에 따라서 만약에 memo..., 배열을 하나 만들어둠.
    3. 배열에 도착지가 있다면야... 그냥 반환을 해주면 될 것 같긴 한데...
*/
var snakesAndLadders = function (board) {
  let arr = [];
  let flag = 0;
  for (let i = board.length - 1; i >= 0; i--) {
    if (flag == 0) {
      arr = [...arr, ...board[i]];
      flag = 1;
    } else {
      arr = [...arr, ...board[i].reverse()];
      flag = 0;
    }
  }
  let goal = board.length * board.length;
  let map = new Map();
  let moves = [0];
  map.set(0, 0);
  while (moves.length > 0) {
    let cur = moves.shift(); // 위치를 정하고
    if (cur == goal - 1) {
      //지금 보는 위치는 어짜피 map에 들어가 있으니까 종료조건으로삼음.
      return map.get(cur);
    }
    let num = Math.min(6, goal - cur);
    for (let i = 1; i <= num; i++) {
      let key = arr[cur + i] === -1 ? cur + i : arr[cur + i] - 1;
      if (!map.has(key)) {
        map.set(key, map.get(cur) + 1);
        moves.push(key);
      }
    }
  }
  return -1;
};
