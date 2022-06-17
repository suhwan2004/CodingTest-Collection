/*
Input : Binary Tree
Output : integer( the length of the longest consecutive sequence path)
Constraints :
  - The number of nodes in the tree is in the range [1, 3 * 104].
  - -3 * 104 <= Node.val <= 3 * 104
Edge case : x
*/

/*
BFS Solution
Time : O(N^2)
Space : O(N)
DS : Binary Tree, Array
ALGO : BFS
*/

var longestConsecutiveBFS = function (root) {
  let queue = [];
  let max = 1;
  queue.push([root, 1]);

  while (queue.length > 0) {
    let [curNode, val] = queue.shift();
    max = Math.max(val, max);

    if (curNode.left) queue.push(checkHelper(curNode, curNode.left, val));
    if (curNode.right) queue.push(checkHelper(curNode, curNode.right, val));
  }

  return max;

  function checkHelper(node, nextNode, val) {
    return nextNode.val === node.val + 1 ? [nextNode, val + 1] : [nextNode, 1];
  }
};

/*
DFS Solution

Time : O(N), N === total nodes...
Space : O(N), call stack
DS : binary Tree
ALGO : DFS
*/
var longestConsecutive = function (root) {
  let max = 0;
  dfs(root, 1);
  return max;

  function dfs(cur, val) {
    max = Math.max(max, val);
    if (cur.left) dfs(cur.left, cur.left.val === cur.val + 1 ? val + 1 : 1);
    if (cur.right) dfs(cur.right, cur.right.val === cur.val + 1 ? val + 1 : 1);
  }
};
