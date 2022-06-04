class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor(node = null) {
    this.head = node;
  }
}
let headTwo10 = new Node(10, null);
let headTwo9 = new Node(9, headTwo10);
let headOne8 = new Node(8, null);
let headTwo5 = new Node(5, headTwo9);
let headOne7 = new Node(8, headOne8);
let headTwo4 = new Node(4, headTwo5);
let headOne6 = new Node(6, headOne7);
let headTwo3 = new Node(3, headTwo4);
let headOne = new LinkedList(new Node(2, headOne6));
let headTwo = new LinkedList(new Node(1, headTwo3));

function solution() {
  let arr = [];
  let h1 = headOne.head;
  let h2 = headTwo.head;

  //둘 중 하나라도 null이 아니라면 계속 해도 됨.
  while (h1 != null || h2 != null) {
    let val1 = h1 != null ? h1.data : null;
    let val2 = h2 != null ? h2.data : null;
    if (!val1 || val1 > val2) {
      arr.push(val2);
      h2 = h2.next;
    } else {
      arr.push(val1);
      h1 = h1.next;
    }
  }
  return arr;
}
console.log(solution());
