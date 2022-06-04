var pathSum = function (root, targetSum) {
  let total = 0;
  let map = new Map();
  map.set(0, 1);

  function helper(node, sum) {
    if (node === null) return false;
    sum = sum + node.val;
    if (map.has(sum - targetSum)) {
      total = total + map.get(sum - targetSum);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
    helper(node.left, sum);
    helper(node.right, sum);
    map.set(sum, map.get(sum) - 1);
  }
  helper(root, 0);
  return total;
};
