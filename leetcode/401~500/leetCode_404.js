var sumOfLeftLeaves = function (root) {
  let sum = 0;
  dfs(root, -1);
  return sum;
  function dfs(node, flag) {
    if (!node.left && !node.right) {
      if (node.val !== 0 && flag === "left") sum += node.val;
      return;
    }

    if (node.right) dfs(node.right, "right");
    if (node.left) dfs(node.left, "left");
  }
};
