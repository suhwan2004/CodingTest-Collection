/*
Input : binary Tree(root)
Output : boolean(Is root Symmetric tree?)
Contraints : 
 - The number of nodes in the tree is in the range [1, 1000].
 - -100 <= Node.val <= 100
E : x
*/

/*
Optimal Solution
Time : O(N)
Space : O(N)
ALGO : DFS
DS : binary Tree

*/

var isSymmetric = function (root) {
  return find(root.left, root.right);
};
function find(left, right) {
  if (!left && !right) return true;
  if (!left || !right || left.val !== right.val) return false;
  return find(left.left, right.right) && find(left.right, right.left);
}
