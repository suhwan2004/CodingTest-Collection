/*
start : 6:24 ~

Determine whether a doubly linked list is a palindrome. What if it’s singly linked?

For example, 1 -> 4 -> 3 -> 4 -> 1 returns True while 1 -> 4 returns False.
*/

class Node {
  constructor(val, prev, next) {
    this.prev = prev;
    this.val = val;
    this.next = next;
  }
}

function createDLL() {
  let node4 = new Node(1, node3, null);
  let node3 = new Node(4, node2, node4);
  let node2 = new Node(3, node1, node3);
  let node1 = new Node(4, root, node2);
  let root = new Node(1, null, node1);

  return root;
}

/*
Bruthe force Solution : 회문인지 확인하기 위해 다 돌고 배열에 넣고 가운데서 다 도는 것.
Optimal force Solution : 가운데로 간 이후에 포인터를 생성하고 확인.

인터뷰 문제로 내기 별로임. 폐기처리.
*/
// function Bruthe(input) {
//   if (!input) return false; // edge case
//   let arr = [];
//   let cur = input;
//   while(cur){
//     arr.push(cur.val);
//     cur = cur.next;
//   }

// }

// function Optimal() {}

// console.log(Bruthe(createDLL()));
