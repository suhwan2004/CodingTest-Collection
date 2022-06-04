var searchBST = function (root, val) {
  while (root != null && val !== root.val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
};
