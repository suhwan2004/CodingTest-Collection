/*
Input : Binary Tree(root), int(targetSum)
Output : boolean(if one of pathsums is equal targetSum)
Contraints : 
 - The number of nodes in the tree is in the range [0, 5000].
 - -1000 <= Node.val <= 1000
 - -1000 <= targetSum <= 1000
E : if (!root) return false;
*/

/*
Optimal Solution

Time : O(N)
Space : O(N)
ALGO : DFS
DS : Binary Tree
*/

var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let res = false;
  dfs(root, 0);
  return res;

  function dfs(node, sum) {
    sum += node.val;
    if (node.left === null && node.right === null) {
      if (sum === targetSum) res = true;
    } else {
      if (node.left !== null) dfs(node.left, sum);
      if (node.right !== null) dfs(node.right, sum);
    }
  }
};
