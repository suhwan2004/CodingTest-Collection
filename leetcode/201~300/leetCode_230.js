/*
input : binary search Tree(root), int(k)
output : int(Kth Smallest Element in a BST)
constraints : 
 - The number of nodes in the tree is n.
 - 1 <= k <= n <= 10^4
 - 0 <= Node.val <= 10^4
E : x
*/

/*
Bruth Force
Time : O(N)
Space : O(N)
ALGO : dfs
DS : Array
*/

var kthSmallest = function (root, k) {
  let arr = [];
  dfs(root);
  return arr[k - 1];
  function dfs(node) {
    if (!node) return;
    if (node.left) dfs(node.left);
    arr.push(node.val);
    if (node.right) dfs(node.right);
  }
};

/*
Optimal SOlution
 => Binary Search Tree의 고유 특성을 활용해야됨.
*/
