/*
Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
*/

class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

//root라는 이름의 Node 객체를 시작노드로 하는 linked list가 있다고 가정함.

function solution(root, goal) {
  help(root, root, 1);
  return root;

  function help(prev, node, current) {
    if (current === goal) {
      prev.next = node.next;
      return;
    }
    help(node, node.next, current + 1);
  }
}

console.log(solution(root, 5));
