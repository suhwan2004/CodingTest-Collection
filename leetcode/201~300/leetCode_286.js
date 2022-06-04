/*
Input : int 2d Array(rooms)
Output : x, Do not return anything, modify rooms in-place instead.
Contraints : 
 - -1 A wall or an obstacle.
 - 0 A gate.
 - INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
 - m == rooms.length
 - n == rooms[i].length
 - 1 <= m, n <= 250
 - rooms[i][j] is -1, 0, or 231 - 1.
E : x
*/

/*
반대로 생각하기
게이트(0 에서 INF)의 좌표 저장.

Time : O(N^2), BFS + shift_func
Space : O(N)
ALGO : BFS, for
DS : Array
*/
var wallsAndGates = function (rooms) {
  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let queue = [];
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === 0) queue.push([i, j, 0]);
    }
  }

  while (queue.length > 0) {
    let [r, c, cost] = queue.shift();
    cost++;
    for (let dir of dirs) {
      let nr = r + dir[0],
        nc = c + dir[1];
      if (
        nr >= 0 &&
        nr < rooms.length &&
        nc >= 0 &&
        nc <= rooms[0].length &&
        rooms[nr][nc] === 2147483647
      ) {
        rooms[nr][nc] = cost;
        queue.push([nr, nc, cost]);
      }
    }
  }

  return rooms;
};
