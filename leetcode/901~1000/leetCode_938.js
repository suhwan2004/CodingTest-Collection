var rangeSumBST = function (root, low, high) {
  let val = 0;
  dfs(root);
  return val;
  function dfs(node) {
    if (node.val >= low && node.val <= high) val += node.val;
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
};
