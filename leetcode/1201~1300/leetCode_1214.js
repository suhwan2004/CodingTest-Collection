var twoSumBSTs = function (root1, root2, target) {
  let set = new Set(),
    set1 = new Set();
  dfs(root1, 1);
  dfs(root2, 2);

  for (let i of set) {
    if (set1.has(target - i)) return true;
  }

  return false;

  function dfs(node, flag) {
    flag === 1 ? set.add(node.val) : set1.add(node.val);
    if (!node.left && !node.right) return;

    if (node.left) dfs(node.left, flag);
    if (node.right) dfs(node.right, flag);
  }
};
