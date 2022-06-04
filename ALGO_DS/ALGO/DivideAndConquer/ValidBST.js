/*
왼 쪽일 경우 부모에 비해 현재 루트는 부모보다는 무조건 작아야 함.
오른 쪽일 경우 부모보다 무조건 커야 됨.
*/
function isValidBST(root, min = null, max = null) {
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
}
