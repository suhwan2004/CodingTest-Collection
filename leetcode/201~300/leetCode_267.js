/*
Input : string(s)
Output : String Array(all palandrome permutations...)
Contraints : 
 - 1 <= s.length <= 16
 - s consists of only lowercase English letters.
E : x 
*/

/*
Time : O(backtracking)
Space : O(backtracking + all permutations)
ALGO : for, dfs, backtracking
DS : HashMap, HashSet, Array
*/

var generatePalindromes = function (s) {
  let map = new Map();
  let visited = new Set();
  let res = [];
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }
  //checking you can make palindrome permutation
  if (map.size === 1) return [s];
  for (let [k, v] of map) {
    if (v % 2 === 1) {
      if (s.length % 2 === 0 || !flag) return [];
      else flag = false;
    }
  }

  dfs("", "", "");
  return res;

  function dfs(f, m, e) {
    if (f.length + m.length + e.length === s.length) {
      res.push(f + m + e);
      return;
    }
    for (let [k, v] of map) {
      if (v % 2 === 1 && !visited.has(`${f},${k},${e}`)) {
        map.set(k, v - 1);
        dfs(f, k, e);
        map.set(k, v);
        visited.add(`${f},${k},${e}`);
      } else if (
        v > 1 &&
        v % 2 === 0 &&
        !visited.has(`${f + k},${m},${k + e}`)
      ) {
        map.set(k, v - 2);
        dfs(f + k, m, k + e);
        map.set(k, v);
        visited.add(`${f + k},${m},${k + e}`);
      }
    }
  }
};
