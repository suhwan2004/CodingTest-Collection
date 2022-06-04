/*
Input : binary Tree(root)
Output : int(Return the total sum of all root-to-leaf numbers) => 위로 올라갈 수록 한 차수씩 뛰는 방식. 이 값들을 다 더하면 됨.
Contraints : 
 - The number of nodes in the tree is in the range [1, 1000].
 - 0 <= Node.val <= 9
 - The depth of the tree will not exceed 10.
E : if(!root.left && !root.right) return root.val;
*/

/*
Time : O(N)
Space : O(N)
ALGO : dfs
DS : binary tree
*/
var sumNumbers = function (root) {
  if (!root.left && !root.right) return root.val;
  let sum = 0;
  dfs(root, "");
  return sum;

  function dfs(node, val) {
    val += `${node.val}`;
    if (!node.right && !node.left) {
      sum += Number(val);
      return;
    }
    if (node.left) dfs(node.left, val);
    if (node.right) dfs(node.right, val);
  }
};
