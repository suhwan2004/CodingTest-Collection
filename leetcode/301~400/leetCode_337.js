var rob = function (root) {
  const { current, next } = traverse(root);

  return Math.max(current, next);
};

function traverse(root) {
  if (!root) {
    return { current: 0, next: 0 };
  }

  const left = traverse(root.left);
  const right = traverse(root.right);
  const current = root.val + left.next + right.next;
  const next =
    Math.max(left.current, left.next) + Math.max(right.current, right.next);

  return { current, next };
}
