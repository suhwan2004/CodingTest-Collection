/*
Input : binary Tree(root) 
Output : binary Tree(invert root) => 좌우반전된 root 반환
Contraints : 
 - The number of nodes in the tree is in the range [0, 100].
 - -100 <= Node.val <= 100
E : x
*/

/*
Optimal Solution
Time : O(N)
Space : O(N)
ALGO : dfs
DS : binary tree
*/

var invertTree = function (root) {
  if (!root) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
