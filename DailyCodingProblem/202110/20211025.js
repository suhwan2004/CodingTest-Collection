/*
Given the root to a binary search tree, find the second largest node in the tree.
*/

/*
bst는 특징이 있음. root.left.val < root.val < root.right.val !!!

일단, 문제가 원하는 건 bst를 줄테니, 두 번째 tree에서 두번째로 큰 노드를 찾으면 됨.

아래로 내려가야 될 것 같음.
생각해본 솔루션.

dfs로 푼 다면 일단, 다 돌면서 [값, node]로 넣을 것임. 그렇게 하여 arr.sort((a,b) => a[0] - b[0]);이렇게 sort

return arr[1][0]; 하면 됨.

엣지 케이스는 확실하진 않지만, tree의 노드 갯수가 0, 1개라면 null 반환할 것임.
*/

class Node {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function solution(root) {
  if (!root || (root && !root.left && !root.right)) return null; // edge case => no root , exist root but no child node...

  let arr = []; // space : O(2n) => O(n)
  dfs(node); // Time : O(n), space : O(1)

  arr.sort((a, b) => b[0] - a[0]); //Time : O(nlogn);

  return arr[1][1];

  //topdown dfs...
  function dfs(node) {
    if (!node) return;
    arr.push([node.val, node]);
    dfs(node.left); // move node.left
    dfs(node.right); // move node.right
  }
}
console.log(solution(tree));
