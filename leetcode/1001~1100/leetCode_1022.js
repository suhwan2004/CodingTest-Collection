var sumRootToLeaf = function (root) {
  let sum = 0;
  dfs(root, "");
  return sum;
  function dfs(root, path) {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      sum += parseInt(path + root.val, 2);
      return;
    }
    dfs(root.left, path + root.val);
    dfs(root.right, path + root.val);
  }
  // T.C: O(N)
  // S.C: O(H)
};
