/*
8:24 ~ 90 

Rearrange a LinkedList (medium)#
Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.
Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

Example 1:
Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 

Example 2:
Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
Output: 2 -> 10 -> 4 -> 8 -> 6 -> null


--------------------

I : Single Linked List
O : SLL
C : SLL.length > 0
E : SLL길이가 1,2 일때 그냥 반환해라.

DS: Linked list
ALGO: recursion, for
Time: O(N)
Space: O(N)


------------------

2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
             ||

let node = 2->4->6 ->null
let node1 = 8->10->12 => null

let prev = null;

node가 앞으로 한칸씩 넘어갈 때 마다.

let list1 = 2 -> 4 -> 6 -> null
let list2 = 8 -> 10 -> 12 null 
*/

function Solution(head) {
  if (!head.next && !head.next.next) return head;

  let len = 0;
  let node = head;
  let count = 1;

  while (node) {
    len++;
    node = node.next;
  }

  let mid = Math.round(len / 2);

  node = head;
  let node1 = head;

  if (len % 2 === 0) {
    for (let i = 0; i < mid; i++) {
      node1 = node1.next;
    }
  } else {
    for (let i = 0; i < mid - 1; i++) {
      node1 = node1.next;
    }
  }

  let now = recursion(node1);

  node.next = now;
  node.next.next = null;
  node = head;

  return head;
  function recursion(curNode) {
    if (!curNode.next) {
      return curNode;
    }
    let now = recursion(curNode.next);
    let nextNode = node.next;
    node.next = now;
    now.next = nextNode;
    node = node.next;
    node = node.next;
    count++;
    if (count === mid) node.next = null;
    return curNode;
  }
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node = new ListNode(
  2,
  new ListNode(
    4,
    new ListNode(6, new ListNode(8, new ListNode(10, new ListNode(12))))
  )
);

console.log(Solution(node));
