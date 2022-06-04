/*
Input : binary Tree(root)
Output : int(Maximum Path Sum)
Contraints : 
 - The number of nodes in the tree is in the range [1, 3 * 10^4].
 - -1000 <= Node.val <= 1000
E : if (!root.left && !root.right) return root.val;
*/

/*
Time : O(N)
Space : O(H)
ALGO : dfs
DS : binary tree
*/

var maxPathSum = function (root) {
  if (!root.left && !root.right) return root.val;

  let max = -Infinity;
  let node = root;
  max = Math.max(dfs(node), max);
  return max;

  function dfs(node) {
    if (!node.left && !node.right) {
      max = Math.max(node.val, max);
      return node.val;
    }

    let lVal = -Infinity,
      rVal = -Infinity;

    if (node.left) lVal = dfs(node.left);
    if (node.right) rVal = dfs(node.right);

    //현재 Path와 max를 비교하여 max값 갱신.
    max = Math.max(
      max,
      node.val,
      node.val + lVal,
      node.val + rVal,
      node.val + lVal + rVal
    );
    //가장 큰 선을 만들어 넘겨줌.
    return Math.max(node.val, node.val + lVal, node.val + rVal);
  }
};
