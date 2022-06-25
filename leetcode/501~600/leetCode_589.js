/*
input : N-ary Tree
Output : int Array(Preorder Traversal this tree...)
Constraints : 
 - The number of nodes in the tree is in the range [0, 104].
 - 0 <= Node.val <= 104
 - The height of the n-ary tree is less than or equal to 1000.
Edge case : if (!root) return [];
*/

/*
Optimal Solution

Time : O(N)
Space : O(N)
ALGO : DFS
DS : Array
*/
var preorder = function (root) {
  if (!root) return [];
  let arr = [];
  dfs(root);

  function dfs(node) {
    arr.push(node.val);
    if (node.children.length === 0) return;
    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i]);
    }
  }

  return arr;
};
