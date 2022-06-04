var orangesRotting = function (grid) {
  let queue = [[], []];
  let flag_0 = false;
  let flag_1 = false;
  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) flag_0 = true;
      if (grid[i][j] === 1) flag_1 = true;
      if (grid[i][j] === 2) queue[0].push([i, j]);
    }
  }
  if (queue[0].length === 0) {
    if (flag_1) return -1;
    else {
      if (flag_0) return 0;
    }
  }

  let count = 0;
  while (queue[0].length > 0 || queue[1].length > 0) {
    while (queue[0].length > 0) {
      let a = queue[0].shift();
      for (let j = 0; j < direction.length; j++) {
        let row = a[0] + direction[j][0];
        let col = a[1] + direction[j][1];
        if (
          row >= 0 &&
          row < grid.length &&
          col >= 0 &&
          col < grid[0].length &&
          grid[row][col] === 1
        ) {
          grid[row][col] = 2;
          queue[1].push([row, col]);
        }
      }
    }
    queue.shift();
    queue.push([]);
    count++;
    if (queue[0].length === 0) break;
  }
  let flag = true;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) flag = false;
    }
  }
  return flag === true ? count - 1 : -1;
};
