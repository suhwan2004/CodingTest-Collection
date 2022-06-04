var bstFromPreorder = function (preorder) {
  let recur = function (lower, upper) {
    if (preorder[0] < lower || preorder[0] > upper) return null;
    if (preorder.length == 0) return null;
    let root = new TreeNode(preorder.shift());
    root.left = recur(lower, root.val);
    root.right = recur(root.val, upper);
    return root;
  };
  return recur(-Infinity, Infinity);
};
