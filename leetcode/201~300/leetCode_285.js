/*
Input : binary Search Tree(root), node(p)
Output : node(중위 탐색 중 p 노드 이후, 다음으로 이동하는 노드)
Contraints : 
 - The number of nodes in the tree is in the range [1, 10^4].
 - -10^5 <= Node.val <= 10^5
 - All Nodes will have unique values.
E : if (!root) return null
*/

/*
Time : O(N)
Space : O(1)
ALGO : for
DS : binary Search Tree, for 
*/

var inorderSuccessor = function (root, p) {
  if (!root) return null;
  let parent = null;
  let curr = root;

  while (curr !== p) {
    if (p.val < curr.val) {
      parent = curr;
      curr = curr.left;
    } else curr = curr.right;
  }

  if (!curr.right) return parent;
  curr = curr.right;
  while (curr.left) curr = curr.left;
  return curr;
};
