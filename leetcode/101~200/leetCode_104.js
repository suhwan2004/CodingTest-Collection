/*
Input : Binary Tree(root)
Output : int(maximum depth)
Contraints : 
 - The number of nodes in the tree is in the range [0, 10^4].
 - -100 <= Node.val <= 100
E : if (!root) return 0;
*/

/*
Time : O(N)
Space : O(N)
ALGO : dfs
DS : Binary Tree
*/

var maxDepth = function (root) {
  if (!root) return 0;
  let maxDep = 0;
  dfs(root, 1);
  return maxDep;

  function dfs(node, dep) {
    if (!node.right && !node.left) {
      maxDep = Math.max(dep, maxDep);
      return;
    }
    if (node.left) dfs(node.left, dep + 1);
    if (node.right) dfs(node.right, dep + 1);
  }
};
