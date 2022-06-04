var findLeaves = function (root) {
  let arr = [];

  dfs(root);

  return arr;
  function dfs(node) {
    if (!node.left && !node.right) {
      if (arr[0] == undefined) {
        arr[0] = [];
      }
      arr[0].push(node.val);
      return 0;
    }

    let leftDep = -Infinity,
      rightDep = -Infinity;
    if (node.left) leftDep = dfs(node.left);
    if (node.right) rightDep = dfs(node.right);

    let curDep = Math.max(leftDep, rightDep) + 1;
    if (arr[curDep] == undefined) {
      arr[curDep] = [];
    }
    arr[curDep].push(node.val);

    return curDep;
  }
};
