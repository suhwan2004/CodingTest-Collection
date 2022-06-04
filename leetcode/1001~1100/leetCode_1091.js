// Bruth force : DFS Solution ==> 시간 초과

var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1;
  let min = Infinity;
  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ]; // 8 directions...
  let visited = Array.from(Array(grid.length), () =>
    Array(grid[0].length).fill(Infinity)
  );
  dfs(0, 0, 1);
  return min === Infinity ? -1 : min;

  function dfs(row, col, cost) {
    if (cost >= min) return;
    if (row === grid.length - 1 && col === grid[0].length - 1) {
      min = Math.min(cost, min);
      return;
    }
    for (let [r, c] of direction) {
      let newR = row + r;
      let newC = col + c;
      if (
        newR >= 0 &&
        newR < grid.length &&
        newC >= 0 &&
        newR < grid[0].length &&
        grid[newR][newC] === 0
      ) {
        if (cost + 1 < visited[newR][newC]) {
          visited[newR][newC] = cost + 1;
          dfs(newR, newC, cost + 1);
        }
      }
    }
  }
};

/*
Optimal Solution ===> BFS Solution
*/
const shortestPathBinaryMatrix = (grid) => {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  if (grid[0][0] === 1) return -1;

  const N = grid.length;
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [row, col, path] = queue.shift();

    if (row === N - 1 && col === N - 1) return path;

    for (const [dx, dy] of directions) {
      let x = row + dx;
      let y = col + dy;

      // if invalid, continue
      if (x < 0 || x >= N) continue;
      if (y < 0 || y >= N) continue;
      if (grid[x][y] !== 0) continue;

      queue.push([x, y, path + 1]);
      grid[x][y] = 1;
    }
  }

  return -1;
};
