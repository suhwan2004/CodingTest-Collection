/*
Input : Binary Tree(root)
Output : Binary Tree(root after inorder traversal)
Contraints : 
 - The number of nodes in the tree is in the range [0, 100].
 - -100 <= Node.val <= 100
E : if (!root) return [];
*/

/*
Optimal Solution
Time : O(N)
Space : O(N)
ALGO : dfs(inorder traversal)
DS : Array, Tree
*/

var inorderTraversal = function (root) {
  if (!root) return [];
  let res = [];
  inorder(root);
  return res;

  function inorder(node) {
    if (node.left) inorder(node.left);
    res.push(node.val);
    if (node.right) inorder(node.right);
  }
};
