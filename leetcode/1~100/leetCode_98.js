/*
Input : Binary Search Tree(root), 2 int(min, max)
Output : boolean(Is this validate BST??)
Contraints : 
 - The number of nodes in the tree is in the range [1, 104].
 - -231 <= Node.val <= 231 - 1
E : x
*/

/*
Optimal Solution
Time : O(N)
Space : O(N)
ALGO : dfs
DS : tree
*/

var isValidBST = function (root, min = null, max = null) {
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
