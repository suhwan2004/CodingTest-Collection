class Node {
  constructor(val, node = null) {
    this.val = val;
    this.next = node;
  }
}

let node1 = new Node(3, new Node(7, new Node(8, new Node(10, null))));
let node2 = new Node(99, new Node(1, new Node(8, new Node(10, null))));

function solution(node1, node2) {
  let first = node1;
  let second = node2;
  while (first.val !== second.val) {
    first = !first.next ? node2 : first.next;
    second = !second.next ? node1 : second.next;
    if (first.val === second.val) return first;
  }
  return null;
}

console.log(solution(node1, node2));
