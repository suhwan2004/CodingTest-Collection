/*
Input : binary Search Tree(root), int(target), int(k)
Output : int Array(target과 k이내의 오차값이 있는 가까운 값들의 배열)
Contraints :
 - The number of nodes in the tree is n.
 - 1 <= k <= n <= 10^4.
 - 0 <= Node.val <= 10^9
 - -10^9 <= target <= 10^9
 - Follow up: Assume that the BST is balanced. Could you solve it in less than O(n) runtime (where n = total nodes)? 
E : x 
*/

/*
Bruth Force

Time : O(NLogN)
Space : O(N)
ALGO : dfs, Sort
DS : Array, binary Tree
*/
var closestKValues = function (root, target, k) {
  let arr = [];
  let resArr = [];
  dfs(root);
  arr.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < k; i++) {
    resArr.push(arr[i][0]);
  }
  return resArr;

  function dfs(node) {
    if (!node.left && !node.right) {
      arr.push([node.val, Math.abs(node.val - target)]);
      return;
    }
    if (node.left) dfs(node.left);
    arr.push([node.val, Math.abs(node.val - target)]);
    if (node.right) dfs(node.right);
  }
};
