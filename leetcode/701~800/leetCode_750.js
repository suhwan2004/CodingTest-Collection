var countCornerRectangles = function (grid) {
  let map = new Map();
  let res = 0;
  //O(N), O(N)
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1)
        map.has(j) ? map.get(j).add(i) : map.set(j, new Set().add(i));
    }
  }
  let memory = new Set();
  for (let [k, v] of map) {
    memory.add(k);
    for (let [k1, v1] of map) {
      let count = 0;
      if (memory.has(k1)) continue;
      for (let i of v1) {
        if (v.has(i)) count++;
      }
      if (count > 0) res += (count * (count - 1)) / 2;
    }
  }
  return res;
};
