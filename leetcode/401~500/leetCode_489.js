var cleanRoom = function (robot) {
  let set = new Set();
  let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // up, right, down, left

  function backAndBase() {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  }

  function dfs(row, col, dir) {
    set.add(`${row},${col}`);
    robot.clean();
    for (let i = 0; i < 4; i++) {
      let next = (dir + i) % 4;
      let [pR, pC] = [row + direction[next][0], col + direction[next][1]];
      if (!set.has(`${pR},${pC}`) && robot.move()) {
        dfs(pR, pC, next);
        backAndBase();
      }
      robot.turnRight();
    }
  }

  dfs(0, 0, 0);
};
