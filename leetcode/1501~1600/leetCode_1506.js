const findRoot = function (tree) {
  if (tree.length === 1) return tree[0];
  let map = new Map();
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].children.length === 0) {
      map.set(tree[i].val, 1);
    } else {
      if (!map.has(tree[i].val)) map.set(tree[i].val, dfs(tree[i]));
    }
  }

  let max = -Infinity;
  let resKey = -1;
  for (let [k, v] of map) {
    if (max < v) {
      max = v;
      resKey = k;
    }
  }

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].val === resKey) return tree[i];
  }

  function dfs(node) {
    if (map.has(node.val)) {
      return map.get(node.val);
    }
    if (node.children.length === 0) {
      map.set(node.val, 1);
      return 1;
    }
    let max = -Infinity;
    for (let i of node.children) {
      max = Math.max(dfs(i), max);
    }
    max++;
    map.set(node.val, max);
    return max;
  }
};
