/*
Input : 2 binary Trees(p,q) 
Output : boolean(is Trees same Tree?)
Contraints : 
 - The number of nodes in both trees is in the range [0, 100].
 - -104 <= Node.val <= 104
E : if (p === null && q === null) return true;
*/

/*
  Optimal Solution
  Time : O(N)
  Space : O(N)
  ALGO : DFS
  DS : Binary Tree
*/

var isSameTree = function (p, q) {
  if (p === null && q === null) return true;

  return dfs(p, q);
  function dfs(node, node1) {
    if (!node && !node1) return true;
    if (!node || !node1 || node.val !== node1.val) return false;
    return (
      isSameTree(node.left, node1.left) && isSameTree(node.right, node1.right)
    );
  }
};
