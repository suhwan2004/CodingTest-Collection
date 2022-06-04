/*
Input : int 2d Array(edges), int(n)
Output : boolean(Return true if the edges of the given graph make up a valid tree, and false otherwise)
Contraints : 
 - 1 <= n <= 2000
 - 0 <= edges.length <= 5000
 - edges[i].length == 2
 - 0 <= ai, bi < n
 - ai != bi
 - There are no self-loops or repeated edges.
E : x
*/

/*
Solution
Time : O(N^2)
Space : O(N) 
ALGO : BFS
DS : Array, HashMap, hashSet
*/

var validTree = function (n, edges) {
  if (edges.length === 0) return n === 1 ? true : false;
  let map = new Map();
  let min = Infinity;
  for (let [s, e] of edges) {
    map.has(s) ? map.get(s).push(e) : map.set(s, [e]);
    map.has(e) ? map.get(e).push(s) : map.set(e, [s]);
    min = Math.min(min, s, e);
  }
  if (map.size !== n) return false;

  let visited = new Set();
  let queue = [[min, -Infinity]];
  visited.add(min);

  while (queue.length > 0) {
    let [s, prev] = queue.shift();
    let target = map.get(s);
    for (let e of target) {
      if (visited.has(e) && prev !== e) return false;
      if (prev === e) continue;
      queue.push([e, s]);
      visited.add(e);
    }
  }

  return visited.size === map.size ? true : false;
};
