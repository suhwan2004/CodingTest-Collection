var treeToDoublyList = function (root) {
  if (!root) return root;
  if (!root.left && !root.right) {
    root.left = root;
    root.right = root;
    return root;
  }
  let arr = [];
  dfs(root);
  let point = 0;
  let rootNode = new Node(arr[point], null, null);
  let realRoot = rootNode;
  let lastNode = new Node(arr[arr.length - 1], null, rootNode);
  rootNode.left = lastNode;

  for (let i = 1; i < arr.length - 1; i++) {
    rootNode.right = new Node(arr[i], rootNode, null);
    rootNode = rootNode.right;
  }
  rootNode.right = lastNode;
  lastNode.left = rootNode;
  return realRoot;

  function dfs(node) {
    if (!node) return;
    if (node.left) dfs(node.left);
    arr.push(node.val);
    if (node.right) dfs(node.right);
  }
};
