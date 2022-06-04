var isCousins = function (root, x, y) {
  let x_parent;
  let x_dep;
  let y_parent;
  let y_dep;
  dfs(root, root, 1);

  if (x_parent !== y_parent && x_dep === y_dep) return true;
  else return false;

  function dfs(prev, node, dep) {
    if (x === node.val) {
      x_parent = prev.val;
      x_dep = dep;
      return;
    }
    if (y === node.val) {
      y_parent = prev.val;
      y_dep = dep;
      return;
    }
    if (node.right) dfs(node, node.right, dep + 1);
    if (node.left) dfs(node, node.left, dep + 1);
  }
};
