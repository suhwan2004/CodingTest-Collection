var allPathsSourceTarget = function (graph) {
  let arr = [];
  dfs(0, [0], new Set());

  return arr;

  function dfs(loc, route, visited) {
    if (loc === graph.length - 1) {
      arr.push(route);
      return;
    }

    for (let i of graph[loc]) {
      if (!visited.has(i)) {
        visited.add(i);
        dfs(i, [...route, i], visited);
        visited.delete(i);
      }
    }
  }
};
