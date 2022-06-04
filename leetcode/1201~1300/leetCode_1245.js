var treeDiameter = function (edges) {
  if (edges.length === 0) return 0;
  let map = new Map();
  let total = -Infinity;
  let start = [];
  let set = new Set();
  for (let [s, e] of edges) {
    set.add(e);
    map.has(s) ? map.get(s).push(e) : map.set(s, [e]);
  }
  for (let [k, v] of map) {
    if (!set.has(k)) {
      start.push(k);
    }
  }

  for (let i of start) {
    dfs(i);
  }

  return total;

  function dfs(cur) {
    if (!map.has(cur)) return 0;
    let max = 0,
      max1 = 0;
    for (let i of map.get(cur)) {
      let curVal = dfs(i) + 1;
      if (curVal > max) {
        max1 = max;
        max = curVal;
      } else if (curVal > max1) {
        max1 = curVal;
      }
    }
    total = Math.max(total, max + max1);
    return max;
  }
};
