var countElements = function (arr) {
  let map = new Map();

  for (let val of arr) {
    map.set(val, map.get(val) + 1 || 1);
  }
  let sum = 0;
  for (let [k, v] of map) {
    sum += map.has(k + 1) ? v : 0;
  }

  return sum;
};
