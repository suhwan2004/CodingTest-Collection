var maximumAverageSubtree = function (root) {
  let max = -Infinity;
  dfs(root);
  return max;

  function dfs(node) {
    if (!node.left && !node.right) {
      max = Math.max(node.val, max);
      return [node.val, 1];
    }
    let resL = [0, 0],
      resR = [0, 0];
    if (node.left) resL = dfs(node.left);
    if (node.right) resR = dfs(node.right);
    let sum = resL[0] + resR[0] + node.val;
    let nCount = resL[1] + resR[1] + 1;
    let avg = sum / nCount;
    max = Math.max(max, avg);
    return [sum, nCount];
  }
};
