var findCenter = function (edges) {
  let map = new Map();
  for (let [k, v] of edges) {
    if (map.has(v)) {
      map.set(v, map.get(v) + 1);
    } else map.set(v, 1);
    if (map.has(k)) {
      map.set(k, map.get(k) + 1);
    } else map.set(k, 1);
  }
  let maxArea = -Infinity;
  for (let [k, v] of map) {
    if (maxArea === -Infinity) maxArea = [k, v];
    else {
      if (maxArea[1] < v) maxArea = [k, v];
    }
  }
  return maxArea[0];
};
