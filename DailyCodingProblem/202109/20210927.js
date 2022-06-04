/*Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
 */

/*
 자 유니버셜 벨류 트리를 카운트 하는 조건.
 root.val == root.right.val == root.left.val 이거나 (양 자식노드와 부모 노드의 값이 다 동일해야됨.)
 root.val, root.right == null, root.left.val == null 이여야 됨. (자식노드가 없는 끝따리 단일 노드)
 이걸 재귀로 돌면서 계산하면 될듯.

 */

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function solution(root) {
  let count = 0;
  dfs(root);
  return count;
  function dfs(node) {
    if (node.right === null && node.left === null) {
      count++;
      return;
    }

    if (node.val === node.right.val && node.val === node.left.val) {
      count++;
    }
    if (node.right != null) dfs(node.right);
    if (node.left != null) dfs(node.left);
  }
}

let r3 = new Node(1, null, null);
let l3 = new Node(1, null, null);
let r2 = new Node(0, null, null);
let l2 = new Node(1, l3, r3);
let r1 = new Node(0, l2, r2);
let l1 = new Node(1, null, null);
let root = new Node(0, l1, r1);

console.log(solution(root));
