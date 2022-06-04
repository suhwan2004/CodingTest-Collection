var cloneTree = function (root) {
  return dfs(root);

  function dfs(node) {
    if (node == null) return null;

    const { val, children } = node;
    const nodeCopy = new Node(val);

    for (const child of children) {
      nodeCopy.children.push(dfs(child));
    }

    return nodeCopy;
  }
};
