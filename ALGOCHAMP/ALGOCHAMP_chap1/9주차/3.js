// class Tree {
//   constructor(root) {
//     this.root = Node;
//   }
// }
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

let Node_6 = new Node(6);
let Node_5 = new Node(5);
let Node_3 = new Node(3);
let Node_4 = new Node(4, Node_6);
let Node_2 = new Node(2, Node_4, Node_5);
let root = new Node(1, Node_2, Node_3);
let arr = [];
function solution(node, target) {
  dfs(node, target);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return arr[i + 1];
    }
  }
}
function dfs(node) {
  let val1 = "";
  let val2 = "";
  if (node.left != null) dfs(node.left);
  arr.push(node.data);
  if (node.right != null) dfs(node.right);
}
console.log(solution(root, 5));
