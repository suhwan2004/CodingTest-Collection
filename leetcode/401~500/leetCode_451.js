var frequencySort = function (s) {
  let map = new Map();
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }

  for (let [k, v] of map) {
    let word = "";
    for (let i = 0; i < v; i++) {
      word += k;
    }
    if (arr[v] === undefined) arr[v] = "";
    arr[v] += word;
  }

  return arr.reverse().join("");
};
