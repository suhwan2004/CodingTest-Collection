/*
Input : int(n)
Output : String Array(return all the strobogrammatic numbers that are of length n)
Contraints : 1 <= n <= 14
E : if (n === 1) return ["0", "1", "8"];
*/

/*
Time : O(N*dfs)
Space : O(M + dfs)
ALGO : dfs, for
DS : HashMap
*/

var findStrobogrammatic = function (n) {
  if (n === 1) return ["0", "1", "8"];
  let map = new Map();
  map.set(0, 0);
  map.set(1, 1);
  map.set(6, 9);
  map.set(8, 8);
  map.set(9, 6);
  let res = [];
  for (let [k, v] of map) {
    if (k === 0) continue;
    dfs(`${k}`, ``, `${v}`);
  }
  return res;
  function dfs(f, m, e) {
    if (f.length + m.length + e.length === n) {
      res.push(f + m + e);
      return;
    }
    for (let [k, v] of map) {
      if (f.length + e.length === n - 1 && (k == 0 || k == 1 || k == 8)) {
        dfs(f, `${k}`, e);
      } else {
        if (f.length + e.length + m.length < n) dfs(`${f}${k}`, m, `${v}${e}`);
      }
    }
  }
};
