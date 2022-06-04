var knightProbability = function (n, k, row, column) {
  if (k === 0) return 1;
  let totalMove = 8 ** k;
  let arr = [
    [-2, 1],
    [-2, -1],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
  ];
  let res = 0;
  let map = new Map();
  dfs(row, column, 0);
  return res / totalMove;

  function dfs(cRow, cCol, count) {
    let cur = `${cRow},${cCol},${count}`;
    if (count === k) {
      res++;
      return 1;
    }
    if (map.has(cur)) {
      res += map.get(cur);
      return map.get(cur);
    }
    let sum = 0;
    for (let i of arr) {
      let newR = cRow + i[0];
      let newC = cCol + i[1];
      if (newR >= 0 && newC >= 0 && newR < n && newC < n) {
        sum += dfs(newR, newC, count + 1);
      }
    }
    map.set(cur, sum);
    return sum;
  }
};
