/*

연결이 된 하나의 서브 그래프들의 갯수를 구하면 되는 문제.

my solution

N === n, M === edges.length
Time : O(N)
Space : O(M)
*/
var countComponents = function (n, edges) {
  let map = new Map();
  let visited = new Array(n);
  let count = 0;
  for (let i = 0; i < n; i++) {
    map.set(i, []);
    visited[i] = true;
  }

  for (let i = 0; i < edges.length; i++) {
    map.get(edges[i][0]).push(edges[i][1]);
    map.get(edges[i][1]).push(edges[i][0]);
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      dfs(i);
      count++;
    }
  }
  return count;

  function dfs(cur) {
    visited[cur] = false;
    for (let i of map.get(cur)) {
      if (visited[i]) dfs(i);
    }
  }
};
