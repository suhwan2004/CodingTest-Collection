/*
Input : BST(root), int(target)
Output : int(target과 가장 가까운 node.val)
Contraints : 
 - The number of nodes in the tree is in the range [1, 10^4].
 - 0 <= Node.val <= 10^9
 - -10^9 <= target <= 10^9
E : if (!root.left && !root.right) return root.val;
*/

/*
Time : O(H)
Space : O(1)
ALGO : for
DS : Binary Search Tree 
*/

var closestValue = function (root, target) {
  if (!root.left && !root.right) return root.val;

  let closest = Math.abs(root.val - target);
  let closestVal = root.val;
  let go = true;

  while (go) {
    if (Math.abs(root.val - target) < closest) {
      closest = Math.abs(root.val - target);
      closestVal = root.val;
    }
    let path = target < root.val ? "left" : "right";
    if (root[path]) {
      root = root[path];
    } else {
      go = false;
    }
  }

  return closestVal;
};
