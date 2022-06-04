/*
Input : binary Tree(root)
Output : int(count of all Univalue Subtrees)
Contraints : 
 - The number of the node in the tree will be in the range [0, 1000].
 - -1000 <= Node.val <= 1000
E : if (!root) return 0;
*/

/*
Time : O(n)
Space : O(h)
ALGO : dfs
DS : binary tree
*/

var countUnivalSubtrees = function (root) {
  if (!root) return 0;
  let count = 0;
  dfs(root);
  return count;

  function dfs(node) {
    let flag = true;
    if (!node.left && !node.right) {
      count++;
      return node.val;
    }
    if (node.left) {
      let leftchild = dfs(node.left);
      if (leftchild !== node.val) flag = false;
    }
    if (node.right) {
      let rightchild = dfs(node.right);
      if (rightchild !== node.val) flag = false;
    }
    if (flag) {
      count++;
      return node.val;
    } else return -1001;
  }
};
