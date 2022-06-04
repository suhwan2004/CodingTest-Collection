/*
write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch
sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree
that starts at the root node and ends at any leaf node.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let node8 = new Node(8);
let node9 = new Node(9);
let node10 = new Node(10);

let node6 = new Node(6);
let node7 = new Node(7);
let node4 = new Node(4, node8, node9);
let node5 = new Node(5, node10);

let node2 = new Node(2, node4, node5);
let node3 = new Node(3, node6, node7);

let root = new Node(1, node2, node3);

/*
Time : O(2^depth)  => 이진 트리라 계층별로 2 제곱씩 탐색 수가 늘어나며, 다 탐색해야 되기 때문...
Space : O(arr)
*/

function solution() {
  let arr = [];
  if (root.left == null && root.right == null) return root.val;
  dfs(root, 0);
  return arr;

  function dfs(node, sum) {
    if (node.left === null && node.right === null) {
      arr.push(sum + node.val);
      return;
    }
    sum += node.val;
    if (node.left !== null) dfs(node.left, sum);
    if (node.right !== null) dfs(node.right, sum);
  }
}
console.log(solution());
