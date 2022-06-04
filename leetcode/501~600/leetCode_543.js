var diameterOfBinaryTree = function (root) {
  let val = 0;
  let val1 = 0;
  let arr = [];

  if (root.left) val = dfs(root.left) + 1;
  if (root.right) val1 = dfs(root.right) + 1;
  arr.push(val + val1);

  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;

  function dfs(node) {
    if (!node.left && !node.right) {
      return 0;
    }
    let leftVal = 0;
    let rightVal = 0;

    if (node.left) leftVal = dfs(node.left) + 1;
    if (node.right) rightVal = dfs(node.right) + 1;

    arr.push(leftVal + rightVal);
    return Math.max(leftVal, rightVal);
  }
};
