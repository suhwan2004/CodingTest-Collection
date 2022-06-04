/*
DFS
    let res = 0;
    let row = 0, col = 0;
    let dirs = [[-2, 1], [-2, -1], [2, 1], [2, -1], [-1, 2], [-1, -2], [1, 2], [1, -2]];
    let min = Infinity;
    dfs(row, col, 0);
    return min;
    
    function dfs(cR, cC,count){
        if(cR === x && cC === y){
            min = Math.min(min, count);
            return;
        }
        let curDis = Math.abs(x - cR) + Math.abs(y - cC);
        for(let [r,c] of dirs){
            let newR = cR + r;
            let newC = cC + y;
            let newDis = Math.abs(x-newR) + Math.abs(y-newC);
            if(newDis < curDis){
                dfs(newR,newC,count+1);
            }
        } 
    }

현재 위치에서는 거리, 새로운 위치로 갔을 때의 거리를 비교하여 더 낮아야 이동.
허나, 오류인 부분이 발생할 수 있기 때문에 실행이 안됬음. 또한, 깊이를 한번 파면 계속 가버려서 오류를 제거하고 돌려도 시간 초과 발생 가능성 매우 높음...
*/

/*
BFS Solution
*/
var minKnightMoves = function (x, y) {
  const visited = [];
  const dirs = [
    [-2, 1],
    [-2, -1],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [1, 2],
    [1, -2],
  ];

  for (let i = 0; i <= 601; i++) {
    visited[i] = new Array(601).fill(false);
  }

  const queue = [];

  visited[300][300] = true;
  queue.push([300, 300, 0]);

  while (queue.length > 0) {
    const [currX, currY, steps] = queue.shift();

    if (currX == x + 300 && currY == y + 300) return steps;

    for (let i = 0; i < dirs.length; i++) {
      const [xDir, yDir] = dirs[i];

      const nextX = currX + xDir;
      const nextY = currY + yDir;

      if (withinBound(nextX, nextY) && visited[nextX][nextY] == false) {
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY, steps + 1]);
      }
    }
  }

  function withinBound(x, y) {
    return x >= 0 && y >= 0 && x <= 600 && y <= 600;
  }
};
