var highFive = function (items) {
  let map = new Map();
  let res = [];

  //O(NLogN)
  items.sort((a, b) => b[1] - a[1]);

  //O(N), O(N)
  for (let item of items) {
    let [id, score] = item;
    map.has(id) ? map.get(id).push(score) : map.set(id, [score]);
  }

  //O(N)
  for (let [id, arr] of map) {
    arr = arr.slice(0, 5);
    res.push([id, Math.floor(arr.reduce((prev, cur) => prev + cur) / 5)]);
  }

  return res.sort((a, b) => a[0] - b[0]);
};
