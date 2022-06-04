var shortestDistance = function (grid) {
  let visited = Array.from(
    new Array(grid.length),
    () => new Array(grid[0].length)
  );
  let count = 0;
  let arr = [];
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let min = Infinity;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count++;
        visited[i][j] = "x";
        arr.push([i, j]);
        grid[i][j] = "b";
      } else if (grid[i][j] === 0) {
        visited[i][j] = 0;
      } else {
        grid[i][j] = "x";
        visited[i][j] = "x";
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let queue = [[arr[i], 0]];
    let set = new Set();
    set.add(`${arr[i][0]},${arr[i][1]}`);
    while (queue.length > 0) {
      let [[r, c], cost] = queue.shift();
      if (i === arr.length - 1 && typeof visited[r][c] == "number") {
        if (visited[r][c] === count) min = Math.min(min, grid[r][c]);
      }

      for (let [row, col] of directions) {
        let newR = row + r;
        let newC = col + c;
        if (
          newR >= 0 &&
          newR < grid.length &&
          newC >= 0 &&
          newC < grid[0].length &&
          grid[newR][newC] !== "b" &&
          grid[newR][newC] !== "x" &&
          !set.has(`${newR},${newC}`)
        ) {
          queue.push([[newR, newC], cost + 1]);
          grid[newR][newC] += cost + 1;
          visited[newR][newC]++;
          set.add(`${newR},${newC}`);
        }
      }
    }
  }
  return min === Infinity ? -1 : min;
};
