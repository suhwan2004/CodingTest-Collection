var hasPath = function (maze, start, destination) {
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let queue = [start];
  let stopLocation = new Set();
  stopLocation.add(`${start[0]},${start[1]}`);
  while (queue.length > 0) {
    let cur = queue.shift();
    for (let dir of directions) {
      let r = cur[0],
        c = cur[1];
      let nextR = r + dir[0],
        nextC = c + dir[1];
      if (check(nextR, nextC)) {
        while (1) {
          if (check(nextR + dir[0], nextC + dir[1])) {
            (nextR += dir[0]), (nextC += dir[1]);
          } else break;
        }
        if (destination[0] === nextR && destination[1] === nextC) return true;
        if (!stopLocation.has(`${nextR},${nextC}`)) {
          stopLocation.add(`${nextR},${nextC}`);
          queue.push([nextR, nextC]);
        }
      }
    }
  }
  console.log(stopLocation);
  return false;

  function check(r, c) {
    return r >= 0 &&
      r < maze.length &&
      c >= 0 &&
      c < maze[0].length &&
      maze[r][c] === 0
      ? true
      : false;
  }
};
