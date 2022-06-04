/*
Input : 
Output :
Contraints : 
 - The number of nodes in the list is in the range [0, 300].
 - -100 <= Node.val <= 100
 - The list is guaranteed to be sorted in ascending order.
E : 
*/

/*bruthe force : using map
time : O(N)
Space : O(N)
ALGO : for
DS : HashMap, Array, linked list
*/
var deleteDuplicates = function (head) {
  let map = new Map();
  let arr = [];
  let node = head;
  while (node) {
    if (map.has(node.val)) map.set(node.val, map.get(node.val) + 1);
    else map.set(node.val, 1);
    node = node.next;
  }
  let dummy = new ListNode(-1, null);
  let dummyNode = dummy;

  for (let [k, v] of map) {
    if (v === 1) {
      dummy.next = new ListNode(k, null);
      dummy = dummy.next;
    }
  }
  return dummyNode.next;
};

/*
Optimal Solution : do not use Space
Time : O(N)
Space : O(1)
ALGO : for
DS : linked list
*/

var deleteDuplicatesOptimal = function (head) {
  let cur = head;
  let prev = null;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      while (cur && cur.next && cur.val === cur.next.val) {
        cur = cur.next;
      }
      cur = cur.next; // 중복제거
      if (!prev) head = cur; // 아예 시작도 안한 경우
      else prev.next = cur;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
};
